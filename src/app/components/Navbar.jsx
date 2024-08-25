import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <div className='w-full relative'>
    <div className='z-10 p-4 flex flex-row justify-between items-center absolute backdrop-blur-2xl bg-white/50 w-full'>
        <h1 className='font-medium text-xl'>Crowdshaki</h1>
        <Image
            src="/assets/menu.png"
            width={28}
            height={28}
            alt="menu"
        />
    </div>
    <div className='relative'>
        <Image
            src="/assets/art2.jpg"
            width={1000}
            height={2000}
            alt="Background"
            className='w-full h-auto'
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            {/* <p className='text-white text-3xl mb-4'>Utilize our <main></main>odest service in the market 0% platform fee.</p> */}
            <button className='bg-orange-300 text-white px-6 py-4 rounded-lg hover:bg-gray-200 transition-colors'>
                Start a Fundraiser for FREE
            </button>
        </div>
    </div>
</div>
    </div>
  )
}

export default Navbar
