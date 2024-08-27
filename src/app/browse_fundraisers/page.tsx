import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";



// content center
const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Image
        src="/assets/raise_funds.jpg"
        width={1000}
        height={600}
        className="object-scale-down w-full h-[350px]"
        alt="illustration"
      />
      <div className="flex flex-row gap-10 px-4 my-16 justify-items-center">
        <div className="max-h-[650px] flex flex-col gap-4 border border-gray-300 px-6 w-1/4 py-4 shadow-lg text-left">
          <div className="border-b-2 border-gray-300 py-4 w-full">
            <h1 className="text-left font-semibold">CATEGORIES</h1>
          </div>

          <div className="flex flex-col gap-4 border-b-2 border-gray-300 py-4">
            {[
              "All Categories",
              "Education",
              "Medical",
              "Women & Girls",
              "Animals",
              "Creative",
              "Food & Hunger",
              "Environment",
              "Children",
              "Memorial",
              "Community Development",
            ].map((cause, index) => (
              <h1
                key={index}
                className="hover:cursor-pointer hover:text-red-400"
              >
                {cause}
              </h1>
            ))}
          </div>

          <Link
            href="/raise_funds"
            className="font-bold py-4 px-6 bg-red-400 text-white text-center w-full"
          >
            Start a fundraiser
          </Link>
        </div>

        <div className="w-full my-10">
          <button className="text-right text-red-400 hover:underline hover:underline-offset-4 hover:scale-105">Reset filters</button>
          <div className="flex flex-wrap justify-center gap-10 py-5">
            {[...Array(3)].map((_, index) => (
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
                      <h1 className="font-light text-black text-lg">
                        by alpha
                      </h1>
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
          <div className="flex flex-wrap justify-center gap-10 py-5">
            {[...Array(3)].map((_, index) => (
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
                      <h1 className="font-light text-black text-lg">
                        by alpha
                      </h1>
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
      <Footer></Footer>
    </div>
  );
};

export default page;
