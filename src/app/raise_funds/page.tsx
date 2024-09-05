"use client";
import React, { useState, Suspense, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { UserAuth } from "../context/AuthContext";

const RaiseFundsForm = dynamic(() => import("../components/RaiseFundsForm"), {
  ssr: false,
});

const Page = () => {
  const [User, setUser] = useState(null);
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const uid = user?.uid;

  console.log("Welcome", uid)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Navbar />
        <Image
          src="/assets/give_funds.jpg"
          width={1000}
          height={600}
          className="object-scale-down w-full h-[350px]"
          alt="illustration"
        />
        <div className="p-4 md:flex md:flex-row md:justify-center md:items-center">
          <RaiseFundsForm uid={uid}/>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Page;
