import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/database';

export const GET = async (req) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("crowdshaki");
    const labs = await db.collection("Labs").find().toArray();
    return NextResponse.json({ labs });
  } catch (error) {
    return NextResponse.json({ status: 500, error: "Internal Server Error" });
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    const client = await connectToDatabase();
    const db = client.db("crowdshaki");
    const hospitals = await db.collection("hospitals").insertOne(data);
    return NextResponse.json({ message: "POST method handled", data });
  } catch (error) {
    return NextResponse.json({ status: 500, error: "Internal Server Error" });
  }
};
