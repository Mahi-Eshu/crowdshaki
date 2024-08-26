import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div className="relative">
          <Image
            src="/assets/art2.jpg"
            width={1000}
            height={2000}
            alt="Background"
            className="w-full h-auto object-fit opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
            <div className="flex text-center justify-center lg:text-left px-8">
              <h1 className="font-medium text-[24px] md:text-[40px] lg:text-[70px] xl:text-[90px] leading-tight">
                  Your <br />Generosity <br /> Can <br /> Change <br /> Lives
              </h1>
            </div>
          </div>
    </div>
  )
}

export default Herosection
