"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserDetailsForm from '../components/UserDetailsForm';
import { useSearchParams } from "next/navigation";

const Page = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const uid = searchParams.get("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (uid) {
          const res = await fetch("https://crowdshaki.vercel.app/api/personalDetails/fetchData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid }),
          });

          if (!res.ok) {
            throw new Error("Something Went Wrong");
          }
          
          const details = await res.json();
          setUser(details.user_details[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className='p-4 md:flex md:flex-row md:justify-center md:items-center'>
        {user ? <UserDetailsForm user={user} /> : <div>No user found</div>}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
