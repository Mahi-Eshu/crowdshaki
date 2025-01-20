"use server";

import { redirect } from "next/navigation";
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { z } from "zod";
import { parseWithZod } from "@conform-to/zod";
import {
  loginWithPasswordSchema,
  loginWithOTPSchema,
} from "../schemas/zodSchemas";
import { connectToDatabase } from "@/app/lib/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AWS from "aws-sdk";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const ses = new AWS.SES({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export async function loginWithPassword(
  prevState: unknown,
  formData: FormData,
) {
  const submission = parseWithZod(formData, {
    schema: loginWithPasswordSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const email = formData.get("email");
  const password: FormDataEntryValue | null = formData.get("password");

  if (password === null || typeof password !== "string") {
    return { success: false, error: "Password is required" };
  }

  try {
    const client = await connectToDatabase();
    const db = client.db("crowdshaki");

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { success: false, error: "Invalid password" };
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log(user)
    console.log(token)
    // Create cookies on the edge runtime
    const cookieStore = cookies();
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return {
      success: true,
      data: {
        email: user.email,
        token: token,
        phone: user.phone
      }
    };

  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: "An error occurred during login"
    };
  }
}

const OTP_EXPIRATION = 5 * 60 * 1000; // 5 minutes

// Generate a random OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

// Store OTP in the database
async function storeOTP(email: string, otp: string, expiresAt: Date) {
  const client = await connectToDatabase();
  const db = client.db("crowdshaki");
  await db.collection("otps").updateOne(
    { email },
    { $set: { otp, expiresAt } },
    { upsert: true }
  );
}

// Validate OTP from the database
async function validateOTP(email: string, otp: string) {
  const client = await connectToDatabase();
  const db = client.db("crowdshaki");
  const record = await db.collection("otps").findOne({ email });

  if (!record) return false;

  const { otp: storedOTP, expiresAt } = record;

  if (storedOTP === otp && new Date() < new Date(expiresAt)) {
    return true;
  }
  return false;
}

// Remove OTP after successful validation
async function removeOTP(email: string) {
  const client = await connectToDatabase();
  const db = client.db("crowdshaki");
  await db.collection("otps").deleteOne({ email });
}

// Send OTP email using AWS SES
async function sendOTPMail(email: string, otp: string) {
  const sourceEmail = process.env.ADMIN_EMAIL;

  if (!sourceEmail) {
    throw new Error("AWS_SES_FROM_EMAIL environment variable is not defined");
  }

  if (!email) {
    throw new Error("Recipient email is not defined");
  }

  const params = {
    Source: sourceEmail, // Ensure this is defined
    Destination: {
      ToAddresses: [email], // Ensure this is a valid string array
    },
    Message: {
      Body: {
        Text: {
          Data: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
        },
      },
      Subject: {
        Data: "Your OTP Code",
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log("Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send OTP email");
  }
}


export async function sendOTP(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: z.object({
      email: z.string().email(),
    }),
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const email = formData.get("email") as string;

  try {
    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + OTP_EXPIRATION);

    await storeOTP(email, otp, expiresAt);
    await sendOTPMail(email, otp);

    return {
      success: true,
      message: "OTP sent successfully",
    };
  } catch (error) {
    console.error("Error sending OTP:", error);
    return {
      success: false,
      error: "Failed to send OTP",
    };
  }
}

export async function verifyOTP(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginWithOTPSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const email = formData.get("email") as string;
  const otp = formData.get("otp") as string;
  const client = await connectToDatabase();
  const db = client.db("crowdshaki");
  const user = await db.collection("users").findOne({ email });
  const phoneNumber = user.phone
  try {
    const isValid = await validateOTP(email, otp);

    if (!isValid) {
      console.log("Incorrect OTP")
      return {
        success: false,
        error: "Invalid or expired OTP",
      };
    }

    await removeOTP(email);

    const token = jwt.sign({ email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    const cookieStore = cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return {
      success: true,
      data: { email, token, phoneNumber },
    };
  } catch (error) {
    console.error("OTP verification error:", error);
    return {
      success: false,
      error: "OTP verification failed",
    };
  }
}