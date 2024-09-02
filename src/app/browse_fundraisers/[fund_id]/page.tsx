import React from "react";
import { ObjectId } from "mongodb";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FundPage from "@/app/components/FundPage";

const getData = async (fund: string) => {
  const res = await fetch(
    `https://crowdshaki.vercel.app/api/browse_fundraisers/${fund}`,
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
  const fund = fundArray[0]

  return (
    <main>
      <Navbar/>
      <div>
        <h1 className="text-3xl font-bold text-black text-center my-10">
            {fund.reasonForFund}
        </h1>
      </div>
      <Footer/>
    </main>
  );
};

export default page;
