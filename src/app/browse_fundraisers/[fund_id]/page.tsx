"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";

// Fetch data for the specific fund
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

// Define menu links and corresponding content

const Page = ({ params }: any) => {
  const pathname = usePathname();
  const fundId = params.fund_id;

  const [fund, setFund] = useState<any>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fundArray = await getData(fundId);
        setFund(fundArray[0]);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data");
        setLoading(false);
      }
    };
    fetchData();
  }, [fundId]);

  const menuLinks = [
    {
      text: "About",
      content: fund?.situation,
    },
    {
      text: "Documents",
      content: "This section contains important documents for the fundraiser.",
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const neededAmount = fund.amountForFund;
  const receivedAmount = neededAmount / 2;
  const formattedNeededAmount = neededAmount.toLocaleString();
  const formattedReceivedAmount = receivedAmount.toLocaleString();
  const receivedPercentage = (receivedAmount / neededAmount) * 100;

  // Toggle dropdown content visibility
  const toggleDropdown = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <main>
      <Navbar />
      <div>
        <h1 className="font-semibold text-3xl text-center my-10">
          {fund.reasonForFund}
        </h1>
      </div>
      <div className="my-10">
        {/* Image Section */}
        <div className="lg:px-20">
          <div className="flex flex-row justify-between">
            <Image
              src="/assets/art2.jpg"
              width={1000}
              height={2000}
              alt="Background"
              className="w-1/2 h-auto mt-6 md:mt-0 object-scale-down"
            />
            <div className="">
              <div className="shadow-lg px-4 md:px-8 py-4 md:py-6 rounded-lg my-4 border-t border-gray-100 w-full">
                <div className="py-2 md:py-4 border-b border-gray-300">
                  <span className="text-gray-600 font-semibold">
                    Campaigner:
                  </span>{" "}
                  {fund.firstName + " " + fund.lastName}
                </div>
                <div className="py-2 md:py-4">
                  <span className="text-gray-600 font-semibold">
                    Beneficiary:
                  </span>{" "}
                  {fund.beneficiaryName}
                </div>
              </div>
              <button className="px-4 md:px-6 py-3 md:py-4 my-4 md:my-6 font-semibold text-xl md:text-2xl border-2 border-red-400 bg-white text-red-400 hover:bg-red-400 hover:text-white hover:scale-105 transition-transform duration-500 ease-in">
                Donate Now
              </button>
              <div className="mt-2 w-full">
                <div className="flex flex-wrap justify-between gap-2 md:gap-10">
                  <span className="text-2xl md:text-3xl font-medium">
                    Rs.{formattedReceivedAmount}/-
                  </span>
                  <span className="text-sm md:text-base font-medium">
                    Raised out of
                  </span>
                  <span className="text-2xl md:text-3xl font-medium">
                    Rs.{formattedNeededAmount}/-
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-black mt-2">
                  <div
                    className="bg-[#F74541] h-2.5 rounded-full"
                    style={{ width: `${receivedPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="lg:px-20">
        <ul className="flex flex-col text-center">
          {menuLinks.map((link, index) => (
            <li
              key={index}
              className="text-black flex flex-col justify-between font-medium border border-gray-200 py-4 px-20"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <div>{link.text}</div>
                <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-200">
                  {openIndex === index ? "▼" : "▶"}
                </button>
              </div>
              {/* Dropdown content */}
              {openIndex === index && (
                <div className="mt-4 text-left text-gray-700">
                  {link.content}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
