import React from "react";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const getData = async (fund: string) => {
  const res = await fetch(
    `http://localhost:3000/api/browse_fundraisers/${fund}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Something Went Wrong");
  }
  return res.json();
};

const page = async ({ params, searchParams }: any) => {
  const fundId = params.fund_id;
  const fundArray = await getData(fundId);
  const fund = fundArray[0];
  var neededAmount = fund.amountForFund;
  var receivedAmount = 25000;
  var formattedNeededAmount = neededAmount.toLocaleString();
  var formattedReceivedAmount = receivedAmount.toLocaleString();
  var receivedPercentage = (receivedAmount / neededAmount) * 100;

  return (
    <main>
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold text-black text-center my-10">
          {fund.reasonForFund}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-auto xl:h-[100vh] justify-between gap-10 my-10 lg:px-10">
        {/* Image */}
        <div className="w-full lg:w-2/3 h-[40vh] lg:h-2/3">
          <Image
            src="/assets/art2.jpg"
            width={1000}
            height={2000}
            alt="Background"
            className="w-full h-full mt-10 md:mt-0 object-scale-down"
          />
          {/* <div>
            <Image
              src="/assets/art2.jpg"
              width={1000}
              height={2000}
              alt="Background"
              className="w-full h-full mt-10 md:mt-0 object-contain"
            />
            <Image
              src="/assets/art2.jpg"
              width={1000}
              height={2000}
              alt="Background"
              className="w-full h-full mt-10 md:mt-0 object-contain"
            />
            </div> */}
        </div>
        {/* Form Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <button className="px-6 py-4 my-6 font-semibold text-2xl border-2 border-red-400 bg-white text-red-400 ">
            Contribute Now
          </button>
          <div className="mt-2">
            <div className="flex justify-start gap-10">
              <span></span>
              <span className="text-3xl font-medium">
                Rs.{formattedReceivedAmount}/-
              </span>
              <span className="text-sm font-medium">Raised out of</span>
              <span className="text-3xl font-medium">
                Rs.{formattedNeededAmount}/-
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-black mt-2">
              <div
                className="bg-[#F74541] h-2.5 rounded-full"
                style={{ width: `${receivedPercentage}%` }} // Adjust this percentage based on received amount/goal
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
