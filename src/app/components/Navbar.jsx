"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [selectMenu, setSelectMenu] = useState(false);
  const router = useRouter();

  const toggleSelectMenu = () => {
    setSelectMenu(!selectMenu);
  };

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Check if the user is authenticated on component mount and whenever the user object changes
    const isAuthenticated = !!user;
    console.log("User is authenticated:", isAuthenticated);

    // Set isInitialLoad to false after the first render
    if (loading) {
      setLoading(false);
    }
  }, [user, loading]);

  const menuLinks = [
    { text: "Browse Fundraisers", url: "/browse_fundraisers" },
    { text: "How It Works?", url: "/how_it_works" },
    { text: "Gcare Council", url: "/gcare_council"}
  ];

  return (
    <div>
      <div className="w-full">
        <div className="py-4 px-4 md:px-8 flex flex-row justify-between items-center bg-transparent w-full  ">
          <h1 className="font-medium text-xl">
            <Link href="/">Crowdshaki.</Link>
          </h1>
          <div className="hidden lg:flex">
            <ul className="flex flex-row gap-10">
              {menuLinks.map((link, index) => (
                <li
                  key={index}
                  className={`text-black font-medium hover:text-gray-500 hover:scale-110 duration-150 ${
                    pathname === link.url ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => {
                    if (link.text === "Raise Funds" && !user) {
                      alert("Please login to raise funds");
                      return;
                    }
                    router.push(link.url);
                  }}
                >
                  <Link
                    href={link.url}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              {loading ? null : !user ? (
                <Link href="/login" onClick={handleSignIn}>
                  <h1 className="text-black font-medium hover:text-gray-500 hover:scale-110 duration-150">
                    Login!
                  </h1>
                </Link>
              ) : (
                <div className="flex flex-row gap-10">
                  <Link href={`/raise_funds?userId=${user.uid}`}>
                    <h1
                      className={`text-black font-medium hover:text-gray-500 hover:scale-110 duration-150 ${
                        pathname === "/raise_funds"
                          ? "underline underline-offset-4"
                          : ""
                      }`}
                    >
                      Raise Funds
                    </h1>
                  </Link>
                  <Link href={`/personal_details?userId=${user.uid}`}>
                    <h1
                      className={`text-black font-medium hover:text-gray-500 hover:scale-110 duration-150 ${
                        pathname === "/personal_details"
                          ? "underline underline-offset-4"
                          : ""
                      }`}
                    >
                      Profile
                    </h1>
                  </Link>
                  <button
                    className={`text-red-600 font-medium hover:scale-110 duration-150 `}
                    onClick={() => {
                      handleSignOut();
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </ul>
          </div>
          {!selectMenu && (
            <Image
              src="/assets/menu.png"
              width={28}
              height={28}
              alt="menu"
              onClick={toggleSelectMenu}
              className="lg:hidden"
            />
          )}
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
                className=" ml-8"
              />
              <div className="flex flex-col gap-8 items-end">
                {menuLinks.map((link, index) => (
                  <Link
                    href={link.url}
                    key={index}
                    className={`relative font-medium text-2xl ${
                      pathname === link.url
                        ? `underline underline-offset-4`
                        : ` underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
                    }`}
                    onClick={toggleSelectMenu}
                  >
                    {link.text}
                  </Link>
                ))}
                {/* <button className="px-8 py-4 bg-[#F74541] text-center rounded-full font-medium text-2xl">Login / Sign up</button> */}

                {loading ? null : !user ? (
                  <Link href="/login" onClick={handleSignIn}>
                    <h1 className="absolute font-medium text-2xl bottom-24 right-8">
                      Login
                    </h1>
                  </Link>
                ) : (
                  <div className="">
                    <Link
                      href={`/raise_funds?userId=${user.uid}`}
                      onClick={toggleSelectMenu}
                    >
                      <h1 className="font-medium text-2xl bottom-28 right-8">
                        Raise Funds
                      </h1>
                    </Link>
                    <Link
                      href={`/personal_details?userId=${user.uid}`}
                      onClick={toggleSelectMenu}
                    >
                      <h1 className="absolute font-medium text-2xl bottom-28 right-8">
                        Profile
                      </h1>
                    </Link>
                    <button
                      className="absolute font-medium text-2xl text-red-600 bottom-16 right-8"
                      onClick={() => {
                        toggleSelectMenu();
                        handleSignOut();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
