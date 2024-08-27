"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UserDetailsForm from '../components/UserDetailsForm';
import { useSearchParams } from "next/navigation";

const getData = async (uid: string | null) => {
  const res = await fetch("http://localhost:3000/api/personalDetails/fetchData", { 
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ uid })
   });
  if(!res.ok){
      throw new Error("Something Went Wrong")
  }
  return res.json();

}

const page = async() => {
  const searchParams = useSearchParams();
  const uid = searchParams.get("userId");
  const details = await getData(uid)
  const user = details.user_details[0]
  console.log(uid)

  return (
    <div>
      <Navbar></Navbar>
      <div className='p-4 md:flex md:flex-row md:justify-center md:items-center'>
        <UserDetailsForm user={user}/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default page