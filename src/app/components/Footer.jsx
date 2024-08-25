import React from "react";
import Image from "next/image";
import Link from "next/link";
// import BlackCursor from "./BlackCursor";

const Footer = () => {
  const categories = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Funds Raised",
      link: "/menu/sweets",
    },
    {
      name: "Funds Given",
      link: "/menu/savouries",
    }
    
  ];

  return (
    <>
      {/* <BlackCursor /> */}
      <div className="p-4">
      <section className="bg-white flex flex-col text-black p-4 shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="mt-4">
            <Link
              href="/"
              className="md:justify-start md:items-left"
            >
              <span className="text-xl font-medium">
                Crowdshaki
              </span>
            </Link>
            <div className="mt-8">
              <div className="text-xl text-red-700 font-medium mb-2">
                Social Media
              </div>
              <div className="flex flex-col gap-5">
                  <span className="bg-black text-transparent w-[120px] bg-clip-text hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:cursor-pointer text-xl font-light hover:font-medium transition-all">
                    Instagram
                  </span>
              </div>
              <div className="flex flex-col gap-5">
                  <span className="bg-black text-transparent w-[120px] bg-clip-text hover:bg-gradient-to-r hover:from-[#00c6ff] hover:to-[#0072ff] hover:cursor-pointer text-black text-xl font-light hover:font-medium  transition-all">
                    Facebook
                  </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-20 lg:flex-row lg:mt-12">
            <div>
              <h2 className="text-xl text-red-700 font-medium mb-2">Content</h2>
              {categories.map((category) => (
                <Link href={category.link} key={category.name}>
                  <h1 className="hover:text-red-600 text-xl font-light transition-all">
                    {category.name}
                  </h1>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-10 lg:mr-10">
              <div className="flex flex-col gap-10 lg:flex-row">
                <div>
                  <h2 className="text-xl text-red-700 font-medium mb-2">
                    Contact
                  </h2>
                  <p className=" font-light text-lg">+91 9789420775</p>
                </div>
                <div>
                  <h2 className="text-xl text-red-700 font-medium mb-2">
                    Email ID
                  </h2>
                  <p className=" font-light text-lg">
                    hariganeshsweets@gmail.com
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-xl text-red-700 font-medium mb-2">
                  Address
                </h2>
                <p className="font-light text-lg">
                  No 40, Gandhi Road, Palanipet, Arakkonam - 631002.
                  <br />
                  <span className="font-bold">(Landmark</span> : Opposite to
                  Angalamman Koyil.<span className="font-bold">)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[1px] border-gray-300 my-10" />
        <div className="flex flex-col gap-2 lg:flex-row justify-between">
          <p className="font-light text-lg mb-4">
            Copyright© 2024 Crowdshaki All Rights Reserved.
          </p>
          {/* <p className="font-light text-lg mb-4">
            Powered by{" "}
            <Link
              href="https://theweekendcoders.vercel.app"
              className="underline text-red-500"
              target="_blank"
            >
              theweekendcoders
            </Link>
          </p> */}
        </div>
      </section>
      </div>
    </>
  );
};

export default Footer;
