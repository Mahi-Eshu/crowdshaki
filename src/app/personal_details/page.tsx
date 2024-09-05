"use client";
import React, { useEffect, Suspense, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const UserDetailsForm = dynamic(() => import("../components/UserDetailsForm"), {
  ssr: false,
});

const Page = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const uid = searchParams.get("userId");
  // console.log(uid)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (uid) {
          const res = await fetch(
            "https://crowdshaki.vercel.app/api/personalDetails/fetchData",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ uid }),
            }
          );

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
  // console.log("Welcome",user.firstName)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Navbar />
        <div className="flex items-center justify-center">
        <UserDetailsForm user={user}/>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Page;
