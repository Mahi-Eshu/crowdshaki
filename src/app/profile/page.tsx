import React from "react";
import UserDetails from "../components/UserDetails";

const profilePage = () => {
  return (
    <>
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center md:h-[700px]">
        <h1
          className="font-medium font-bold text-3xl md:text-[32px] mb-4 
            capitalize text-center
            drop-shadow-lg py-2 px-4 mt-40
            rounded-lg
            relative"
        >
          Personal Details
        </h1>
        <div className="lg:max-w-fit">
          <UserDetails />
        </div>
      </div>
    </>
  );
};

export default profilePage;
