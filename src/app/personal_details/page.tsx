"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserDetailsForm from '../components/UserDetailsForm';
import { useSearchParams } from "next/navigation";

const Page = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
            throw new Error("Failed to fetch user details");
          }

          const details = await res.json();
          if (details?.user_details?.length > 0) {
            setUser(details.user_details[0]);
          } else {
            throw new Error("No user found");
          }
        } else {
          throw new Error("Invalid user ID");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
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
        {error ? (
          <div>Error: {error}</div>
        ) : (
          user ? <UserDetailsForm user={user} /> : <div>No user found</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
