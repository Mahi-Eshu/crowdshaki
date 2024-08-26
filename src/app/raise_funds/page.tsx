"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import RaiseFundsForm from "../components/RaiseFundsForm"
import { useSearchParams } from 'next/navigation'




const getData = async (uid: string | null) => {
  const res = await fetch(
    "http://localhost:3000/api/raiseFunds",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid }),
    }
  );
  if (!res.ok) {
    throw new Error("Something Went Wrong");
  }
  return res.json();
};
const page = async() => {

  const searchParams = useSearchParams();
  const uid = searchParams.get("userId");
  const details = getData(uid);

  return (
    <div>
      <Navbar></Navbar>
      <Image
          src="/assets/give_funds.jpg"
          width={1000}
          height={600}
          className='object-scale-down w-full h-[350px]'
          alt="illustration"
      />
      <div className='p-4 md:flex md:flex-row md:justify-center md:items-center'>
        <RaiseFundsForm data={details} />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default page