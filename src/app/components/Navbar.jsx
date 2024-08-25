"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [selectMenu, setSelectMenu] = useState(false);

  const toggleSelectMenu = () => {
    setSelectMenu(!selectMenu);
  };

  const menuLinks = [
    { text: "About", url: "/" },
    { text: "Funds Raised", url: "/" },
    { text: "Funds Given", url: "/" },
  ];

  return (
    <div>
      <div className="w-full relative">
        <div className="z-10 p-4 flex flex-row justify-between items-center absolute backdrop-blur-2xl bg-white/50 w-full">
          <h1 className="font-medium text-xl">Crowdshaki</h1>
          {!selectMenu && (
            <Image
              src="/assets/menu.png"
              width={28}
              height={28}
              alt="menu"
              onClick={toggleSelectMenu}
            />
          )}
          {selectMenu && (
            <div
              className={
                selectMenu
                  ? "absolute bottom-0 right-0 top-0 z-10 h-[100%] flex flex-col gap-4 text-black bg-white w-[300px] pr-4 pt-4 ease-in duration-200"
                  : "absolute bottom-0 right-0 hidden top-0 z-10 h-screen flex-col gap-4 text-black bg-white w-[300px] pr-4 pt-4 ease-in duration-200"
              }
            >
              <div className="flex flex-col justify-end items-end gap-10 w-full">
                <Image
                  src="/assets/close.png"
                  width={30}
                  height={30}
                  alt="close"
                  onClick={toggleSelectMenu}
                  className=" w-[32px] h-[32px] ml-8 lg:hidden"
                />
                <div className="flex flex-col gap-8 items-end">
                  {menuLinks.map((link, index) => (
                    <Link
                      href={link.url}
                      key={index}
                      className={`relative font-medium text-2xl ${
                        pathname === link.url
                          ? `underline decoration-wavy underline-offset-8`
                          : ` underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
                      }`}
                      onClick={toggleSelectMenu}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <Image
            src="/assets/art2.jpg"
            width={1000}
            height={2000}
            alt="Background"
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            {/* <p className='text-white text-3xl mb-4'>Utilize our <main></main>odest service in the market 0% platform fee.</p> */}
            
          </div>
        </div>
        {selectMenu && (
            <div
              className={
                selectMenu
                  ? "absolute bottom-0 right-0 top-0 z-10 h-screen flex flex-col gap-4 text-black bg-white w-[250px] pr-4 pt-4 ease-in duration-200"
                  : "absolute bottom-0 right-0 hidden top-0 z-10 h-screen flex-col gap-4 text-black bg-white w-[250px] pr-4 pt-4 ease-in duration-200"
              }
            >
              <div className="flex flex-col justify-end items-end gap-10 w-full">
                <Image
                  src="/assets/close.png"
                  width={30}
                  height={30}
                  alt="close"
                  onClick={toggleSelectMenu}
                  className=" w-[32px] h-[32px] ml-8 lg:hidden"
                />
                <div className="flex flex-col gap-8 items-end">
                  {menuLinks.map((link, index) => (
                    <Link
                      href={link.url}
                      key={index}
                      className={`relative font-medium text-2xl ${
                        pathname === link.url
                          ? `underline decoration-wavy underline-offset-8`
                          : ` underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
                      }`}
                      onClick={toggleSelectMenu}
                    >
                      {link.text}
                    </Link>
                  ))}
                  <button className="px-8 py-4 bg-[#F74541] text-center rounded-full text-white font-medium text-2xl">Login / Sign up</button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Navbar;
