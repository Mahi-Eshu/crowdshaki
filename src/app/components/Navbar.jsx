import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <div className='w-full'>
            <div className='z-1 p-4 flex flex-row justify-between items-center absolute backdrop-blur-2xl bg-white/50 w-full'>
                <h1 className='font-medium text-xl'>Crowdshaki</h1>
                <Image
                    src="/assets/menu.png"
                    width={28}
                    height={28}
                    alt="menu"
                    className=''
                />
            </div>
            <Image
                src="/assets/art2.jpg"
                width={1000}
                height={2000}
                alt="Background"
                className='z-0 object-cover lg:w-[3000px]'
            />
      </div>
    </div>
  )
}

export default Navbar
