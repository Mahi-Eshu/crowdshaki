"use client";
import React, {  useState, Suspense, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import RaiseFundsForm from "../components/RaiseFundsForm";
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const [ uid, setUid ] = useState<string | null>(null);
  const [ loading, setLoading ] = useState(true);
  const searchParams = useSearchParams();


  useEffect(() => {
    const userId = searchParams.get("userId");
    setUid(userId);
    setLoading(false);
  }, [searchParams]);

  if ( loading ) {
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
        <Suspense fallback={<div>Loading form...</div>}>
          <RaiseFundsForm />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default Page;
