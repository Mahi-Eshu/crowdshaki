'use client'

import React from 'react'
import Image from 'next/image'

const TrendingFunds = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
      <h1
        className="my-8 font-bold text-3xl md:text-4xl mt-14 mb-2 
            capitalize text-center
            drop-shadow-lg py-2 px-4
            rounded-lg
            relative"
      >
        Trending Funds
      </h1>
      <h1 className='text-gray-400'>
        View the fundraisers that are most active now
      </h1>
      <div
          className="mx-auto flex flex-col my-10 p-4 items-center justify-center shadow-2xl rounded-3xl max-w-xs w-[310px] h-[450px] hover:scale-105 duration-200"
        >
          <div className="flex flex-col items-center justify-around h-full w-full">
            <Image
              src="/assets/girl.webp"
              width={200}
              height={200}
              alt="help"
              className="rounded-t-3xl object-contain border-gray-700 basis-1/2"
            />
            <hr  className="border border-black w-full"/>
            <div className="flex flex-col basis-1/2 py-4">
              <h1 className="font-medium mt-4 px-3 text-sm">
              Support Sundharajan's (a) Chellappa Family After His Untimely Passing
              </h1>
              <div className='flex flex-row'>
              <Image 
              src="/assets/person.png"
              width={30}
              height={30}
              alt='image'
              className='rounded-full bg-violet-400 my-4'
              />
              <span className='my-5 mx-2'>by XXX</span>
              </div>
              <p className="text-xl my-4"><span className='text-violet-400 font-medium'>₹5000</span> raised out of <span className='text-violet-400 font-medium'>₹10000</span></p>
            </div>
            <button className='text-center text-white bg-violet-400 px-6 py-4 rounded-lg'>
                Donate
            </button>
          </div>
        </div>
    </main>
  )
}

export default TrendingFunds
