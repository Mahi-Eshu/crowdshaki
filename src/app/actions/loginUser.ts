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

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

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
        token: token
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
export async function sendOTP(prevState: unknown, formData: FormData) {
  console.log(formData);
  const submission = parseWithZod(formData, {
    schema: z.object({
      email: z.string().email(),
    }),
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    // Add your OTP sending logic here
    // e.g., generate OTP, send email, etc.
    return submission.reply();
  } catch (error) {
    return submission.reply({
      // fatal: error instanceof Error ? error.message : "Failed to send OTP"
    });
  }
}

export async function verifyOTP(prevState: unknown, formData: FormData) {
  console.log(formData);
  const submission = parseWithZod(formData, {
    schema: loginWithOTPSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    // Add your OTP verification logic here
    // e.g., verify OTP, create session, etc.

    redirect("/dashboard");
  } catch (error) {
    return submission.reply({
      // fatal: error instanceof Error ? error.message : "OTP verification failed"
    });
  }
}
