import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[100vh]">
  {/* Background Image */}
  <Image
    src="/assets/art2.jpg"
    width={1000}
    height={2000}
    alt="Background"
    className="w-full h-full object-cover opacity-40"
  />

  {/* Overlay Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <div className="text-center px-4 sm:px-8">
      <h1 className="font-medium text-[24px] md:text-[40px] lg:text-[70px] xl:text-[90px] leading-tight text-gray-800">
        Your Generosity Can <br /> Change Lives
      </h1>
    </div>

    {/* Button */}
    <Link
      href="/raise_funds"
      className="text-lg md:text-2xl font-medium bg-red-400 py-3 px-6 md:py-4 md:px-8 text-white hover:scale-105 transition-transform duration-300 ease-in-out rounded-full mt-8 md:mt-14"
    >
      Start a Fundraiser
    </Link>
  </div>
</div>

  );
};

export default Herosection;
