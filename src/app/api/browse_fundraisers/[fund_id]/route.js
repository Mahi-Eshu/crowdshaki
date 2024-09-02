// pages/api/most-frequently-bought.js
import { NextResponse } from 'next/server';
import { connectToDatabase, disconnectFromDatabase } from '@/app/lib/database';
import { ObjectId } from 'mongodb';

export const GET = async (request, { params }) => {
  const fundId = params.fund_id; // Extracting the fund_id from the params

  try {
    const client = await connectToDatabase();
    const db = client.db('crowdshaki');

    // Convert fundId to ObjectId before querying
    const fund = await db.collection('raisedFunds').find({ _id: new ObjectId(fundId) }).toArray();
    // Return the fetched item as JSON
    return NextResponse.json(fund);
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Failed to fetch data'));
  }
};
