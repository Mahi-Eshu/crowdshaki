'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

const slides = [
  "/assets/baby.webp",
  "/assets/girl.webp",
  "/assets/oldman.jpeg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current) => current === 0 ? slides.length - 1 : current-1);
  const next = () => setCurrent((current) => current === slides.length - 1 ? 0 : current+1);

  useEffect(()=>{
      const slideInterval = setInterval(next, 5000)
      return () => clearInterval(slideInterval)
  },[])
  return (
    <>
      <div className="flex flex-col md:flex-row overflow-hidden relative">
        <div className="flex min-h-96 max-h-96 md:w-1/2 lg:h-[800px]">
            <Image
              src={slides[current]}
              width={3000}
              height={1000}
              alt="Slides"
              className='object-cover ease-in lg:w-[3000px]'
            />

        </div>
        <div className="flex flex-col px-6 justify-center md:items-left">
            <h1 className="my-8 font-bold text-md xl:text-2xl my-14 
            capitalize text-left
            drop-shadow-lg py-2
            rounded-lg
            relative"> Need Funds to Pay For a Medical Emergency or Social Cause?</h1>
            <div className="flex flex-row items-left justify-between w-full xl:text-xl">
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-violet-500">0%</h1>
                <h1 className="text-gray-400">Platform fee</h1>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-violet-500">72 Lakh+</h1>
                <h1 className="text-gray-400">Donors</h1>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-violet-500">3.2 Lakh+</h1>
                <h1 className="text-gray-400">FundRaisers</h1>
              </div>
            </div>
            <div>
              <h1 className="my-8 font-medium text-sm my-4 
            capitalize text-left
            drop-shadow-lg py-2
            rounded-lg
            relative">Ketto’s <span className="text-violet-700 text-lg font-bold">0%</span> <span className="text-violet-700 text-md font-bold">Platform fees</span> ensures maximum funds for you</h1>
            </div>
            <Link href='/fundRaising'>
            <div className="text-slate-400 py-3 px-2 bg-violet-200 rounded-lg border-2 border-violet-500 w-1/2 text-center text-violet-500">
              Start a Fund raiser
            </div>
            </Link>
            <div>
              <h1 className="font-bold text-sm lg:text-xl my-2
            capitalize text-left
            drop-shadow-lg
            rounded-lg
            relative">இலவசமாக ஒரு நிதி திரட்டலைத் தொடங்குங்கள் </h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
