import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Image
          src="/assets/raise_funds.jpg"
          width={1000}
          height={600}
          className='object-scale-down w-full h-[350px]'
          alt="illustration"
      />
    </div>
  )
}

export default page
