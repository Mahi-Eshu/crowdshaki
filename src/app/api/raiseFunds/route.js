import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/database';

export const POST = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = await req.json();
      const {
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
        category,
        accountHolder,
        accountNumber,
        accountType,
        ifscCode,
        userId, // Assuming userId is passed in the request body
      } = data;

      // Check if any required field is null or undefined
      const requiredFields = {
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
        category,
        accountHolder,
        accountNumber,
        accountType,
        ifscCode,
        userId,
      };

      const missingFields = Object.entries(requiredFields)
        .filter(([key, value]) => value === null || value === undefined)
        .map(([key]) => key);

      if (missingFields.length > 0) {
        return NextResponse.json({
          status: 400,
          error: `Missing or invalid fields: ${missingFields.join(', ')}`,
        });
      }

      // Connect to MongoDB
      const client = await connectToDatabase();
      const db = client.db('crowdshaki');

      // Add user data to MongoDB
      const insert = await db.collection('raisedFunds').insertOne({
        firstName,
        lastName,
        email,
        mobile,
        address,
        pincode,
        beneficiaryName,
        relationship,
        reasonForFund,
        amountForFund,
        category,
        accountHolder,
        accountNumber,
        accountType,
        ifscCode,
        userId,
      });
      console.log(insert);

      return NextResponse.json({
        status: 200,
        message: 'Fund Details added successfully',
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        status: 500,
        error: 'Internal server error',
      });
    }
  } else {
    return NextResponse.json({
      status: 405,
      error: 'Method not allowed',
    });
  }
};
