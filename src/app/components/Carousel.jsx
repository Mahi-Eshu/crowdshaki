'use client';

import React from "react";
import Image from "next/image";
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
        <div className="flex min-h-96 max-h-96 md:w-full lg:max-h-[600px] ">
            <Image
              src={slides[current]}
              width={3000}
              height={1000}
              alt="Slides"
              className='object-cover ease-in lg:w-[3000px]'
            />

        </div>
        <div className="flex flex-col px-6 justify-center items-center">
            <h1 className="my-8 font-bold text-xl my-14 
            capitalize text-left
            drop-shadow-lg py-2
            rounded-lg
            relative"> Need Funds to Pay For a Medical Emergency or Social Cause?</h1>
            <div className="flex flex-row items-left justify-between w-full">
              <div className="flex flex-col items-start">
                <h1>0%</h1>
                <h1>Platform fee</h1>
              </div>
              <div className="flex flex-col items-start">
                <h1>72 Lakh+</h1>
                <h1>Donors</h1>
              </div>
              <div className="flex flex-col items-start">
                <h1>3.2 Lakh+</h1>
                <h1>FundRaisers</h1>
              </div>
            </div>
            <div>
              <h1 className="my-8 font-bold text-xl my-14 
            capitalize text-left
            drop-shadow-lg py-2
            rounded-lg
            relative">Ketto’s 0% Platform fees ensures maximum funds for you</h1>
            </div>
            <div className="text-slate-400 py-3 rounded-lg">
              Start a Fund raiser
            </div>
            <div>
              <h1 className="font-bold text-xl my-2 
            capitalize text-left
            drop-shadow-lg
            rounded-lg
            relative">இலவசமாக ஒரு நிதி திரட்டலைத் தொடங்குங்கள்</h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
