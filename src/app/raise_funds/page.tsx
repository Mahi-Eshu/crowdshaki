"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import RaiseFundsForm from "../components/RaiseFundsForm"
import { useSearchParams } from 'next/navigation'


const page = () => {

  const searchParams = useSearchParams();
  const uid = searchParams.get("userId");
  // const details = getData(uid);

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
        <RaiseFundsForm />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default page;