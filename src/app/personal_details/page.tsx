"use client";
import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserDetailsForm from "../components/UserDetailsForm";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const uid = searchParams.get("userId");

  const getData = async (uid: string | null) => {
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
      throw new Error("Something Went Wrong");
    }
    return res.json();
  };

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (uid) {
      getData(uid)
        .then((details) => {
          setUser(details.user_details[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [uid]);

  return (
    <div>
      <Navbar />
      <div className="p-4 md:flex md:flex-row md:justify-center md:items-center">
        <Suspense fallback={<div>Loading...</div>}>
          {user ? <UserDetailsForm user={user} /> : <div>Loading...</div>}
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
