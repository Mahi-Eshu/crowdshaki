import React from "react";
import Image from "next/image";

const FundRaising = () => {
  return (
    <div className="p-4 my-20">
      <div className="flex flex-col gap-4 mb-20">
      <h1 className="text-5xl font-medium text-red-400 text-center">
        Trending Fundraisers
      </h1>
      <p className="text-center text-gray-500">Be it for a personal need, social cause or a creative idea - you can count on <br /> us for
      the project that you want to raise funds for.</p>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-6 py-5">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-[250px] md:w-[250px] rounded-3xl backdrop-blur-md bg-white/20 flex flex-col shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-105 duration-300 hover:transition-all hover:ease-in"
            >
              <Image
                src="/assets/art2.jpg"
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
                  <button className="px-auto py-3 mt-4 bg-[#F74541] w-full h-[50px] text-center rounded-full text-white font-medium">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 py-5">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-[250px] md:w-[250px] rounded-3xl backdrop-blur-md bg-white/20 flex flex-col shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-105 duration-300 hover:transition-all hover:ease-in"
            >
              <Image
                src="/assets/art2.jpg"
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
                  <button className="px-auto py-3 mt-4 bg-[#F74541] w-full h-[50px] text-center rounded-full text-white font-medium">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundRaising;
