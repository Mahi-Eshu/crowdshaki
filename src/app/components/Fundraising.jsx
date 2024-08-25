import React from 'react'
import Image from 'next/image'

const FundRaising = () => {
  return (
    <div className='p-4'>
        <h1 className='text-2xl font-medium '>Discover fundraisers inspired by what you care about</h1>
        <div className=" w-full">
        <div className="grid grid-flow-col gap-10 overflow-x-scroll py-5 lg:overflow-x-auto lg:justify-items-center">
            <div
              className="w-[250px] rounded-3xl backdrop-blur-md bg-white/20 flex flex-col shadow-xl hover:scale-105 duration-300 hover:transition-all hover:ease-in"
            >
              <Image
                src="/assets/art1.png"
                width={1000}
                height={700}
                alt="item"
                className="object-cover rounded-br-none rounded-bl-none rounded-3xl"
              />
              <div className="flex flex-col">
                <div className="p-4">
                  <h1 className="font-[400] text-xl">Help 12-year old</h1>
                  <div>

                    <h1 className="font-light text-black text-lg">by alpha</h1>
                  </div>
                  <h2 className="text-lg">Rs.2,00,000/-</h2>
                  <button className="px-auto py-3 bg-[#F74541] w-full h-[50px] text-center rounded-full text-white font-medium">Donate</button>
                </div>
                <div className="p-2 flex justify-center items-center">
                
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FundRaising
