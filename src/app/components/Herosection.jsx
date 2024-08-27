import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full h-auto md:h-[80vh] xl:h-[100vh]">
      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 px-4 sm:px-8">
        <h1 className="font-medium text-[24px] md:text-[40px] lg:text-[60px] xl:text-[70px] leading-tight text-gray-800 text-center md:text-left">
          Your <br className="hidden md:block" /> Generosity{" "}
          <br className="hidden md:block" /> Can <br /> Change{" "}
          <br className="hidden md:block" /> Lives
        </h1>
        <Link
          href="/raise_funds"
          className="text-lg md:text-xl lg:text-2xl font-medium bg-red-400 py-3 px-6 lg:py-4 lg:px-8 text-white hover:scale-105 transition-transform duration-300 ease-in-out mt-8"
        >
          Start a Fundraiser
        </Link>
      </div>

      {/* Image */}
      <div className="w-full md:w-2/2 h-[40vh] md:h-full flex justify-center items-center">
        <Image
          src="/assets/hero.png"
          width={1000}
          height={2000}
          alt="Background"
          className="w-full h-full object-scale-down"
        />
      </div>
    </div>
  );
};

export default Herosection;
