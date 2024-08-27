import { NextResponse } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/app/lib/database";

export const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = await req.json();
      const firstName = data.firstName;
      const lastName = data.lastName;
      const email = data.email;
      const mobile = data.mobile;
      const address = data.address;
      const pincode = data.pincode;
      const beneficiaryName = data.beneficiaryName;
      const relationship = data.relationship;
      const amountForFund = data.amountForFund;
      const reasonForFund = data.reasonForFund;
      const accountHolder = data.accountHolder;
      const accountNumber = data.accountNumber;
      const accountType = data.accountType;
      const ifscCode = data.ifscCode;

      // Connect to MongoDB
      const client = await connectToDatabase();
      const db = client.db("crowdshaki");

      // Check if user with given UID already exists
      const existingUser = await db
        .collection("userDetails")
        .findOne({ userId: userID });

      if (existingUser) {
        const update = await db.collection("raisedFunds").updateOne(
          {
            userId: userID,
          },
          {
            $set: {
              firstName,
              lastName,
              email,
              mobile,
              address,
              pincode,
              beneficiaryName,
              relationship,
              amountForFund,
              reasonForFund,
              accountHolder,
              accountNumber,
              accountType,
              ifscCode,
            },
          }
        );
        console.log(update);
        return NextResponse.json({
          status: 409,
          message: "Fund already raised",
        });
      }

      // Add user data to MongoDB
      const insert = await db.collection("raisedFunds").insertOne({
        firstName,
        lastName,
        email,
        mobile,
        address,
        pincode,
        beneficiaryName,
        relationship,
        amountForFund,
        reasonForFund,
        accountHolder,
        accountNumber,
        accountType,
        ifscCode,
        userId: userID,
      });
      console.log(insert);

      return NextResponse.json({
        status: 200,
        message: "Fund raised successfully",
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        status: 500,
        error: "Internal server error",
      });
    }
  } else {
    return NextResponse.json({
      status: 405,
      error: "Method not allowed",
    });
  }
};
