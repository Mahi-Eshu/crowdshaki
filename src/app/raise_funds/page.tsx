"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import RaiseFundsForm from "../components/RaiseFundsForm";
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const [uid, setUid] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userId = searchParams.get("userId");
      setUid(userId);
      setLoading(false);
    }
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navbar />
      <Image
        src="/assets/give_funds.jpg"
        width={1000}
        height={600}
        className='object-scale-down w-full h-[350px]'
        alt="illustration"
      />
      <div className='p-4 md:flex md:flex-row md:justify-center md:items-center'>
        <RaiseFundsForm />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
