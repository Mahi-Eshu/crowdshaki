import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import RaiseFundsForm from "../components/RaiseFundsForm"

const page = () => {
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
    </div>
  )
}

export default page