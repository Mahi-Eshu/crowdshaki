"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase/config";
import { usePathname } from "next/navigation";
import Search from "./Search";
import { toast } from "react-toastify";

const Navbar = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    }
  });

  const handleProfileClick = () => {
    if (loggedIn) {
      setShowMenu(!showMenu);
    } else {
      window.location.href = "/login"; // Redirect to login page
    }
  };

  useEffect(() => {
    const hasShownToast = localStorage.getItem("hasShownLoginToast");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        if (!hasShownToast) {
          toast.success("Logged in successfully", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          localStorage.setItem("hasShownLoginToast", "true");
        }
      } else {
        setLoggedIn(false);
        localStorage.removeItem("hasShownLoginToast");
      }
    });

    // Cleanup function to unsubscribe from onAuthStateChanged
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("User signed out");
      setLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const menuLinks = [
    { text: "Browse Fundraisers", url: "/browseFundraisers" },
    { text: "Fundraise For", url: "/fundraiseFor" },
    { text: "How it works", url: "/howItWorks" },
  ];

  const [navState, setNavState] = useState(false);
  const [isInputFocused, setInputFocus] = useState(false);

  const handleNav = () => {
    setNavState(!navState);
  };

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow =
        navState || isInputFocused ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navState, isInputFocused]);

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  return (
    <div className=" max-w-screen-2xl bg-black h-32 px-4 lg:h-[100px] xl:max-w-full">
      <div className="w-full flex flex-col gap-4 mx-auto">
        <div className="flex flex-row justify-between mt-6 mx-2 z-10 lg:items-center lg:mt-8 lg:justify-between">
          <Image
            src="/assets/menu.png"
            width={30}
            height={30}
            alt="Menu"
            onClick={handleNav}
            className=" w-[24px] h-[24px] lg:hidden"
          />
          <div className="flex flex-row items-center lg:gap-10 xl:gap-20">
            <Link href="/">
              <h1 className="text-white">Crowdshaki.</h1>
            </Link>

            <div className="hidden lg:flex">
              <ul className="flex flex-row gap-10 ">
                {menuLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`text-white text-[14px] font-light hover:text-gray-500 text-center hover:scale-110 duration-150
                        ? "underline underline-offset-4"
                        : ""
                    `}
                  >
                    {link.text === "Fundraise for" ? (
                      <div className="relative group">
                        <span className="cursor-pointer">{link.text}</span>
                        <ul className="absolute hidden group-hover:block bg-white text-white mt-2 py-2 rounded shadow-lg">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            <Link href="/fundraiser/option1">Option 1</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            <Link href="/fundraiser/option2">Option 2</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            <Link href="/fundraiser/option3">Option 3</Link>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <Link href={link.url}>{link.text}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-10 hidden lg:block">
            <Search />
          </div>
          <div
            className={
              navState
                ? "text-white z-10 absolute top-0 left-0 right-0 bottom-0 pt-8 w-full h-[100%] backdrop-blur-2xl bg-black/50 text-center ease-in duration-150"
                : "text-white z-10 absolute top-0 left-[-100%] right-0 bottom-0 pt-8 w-full h-screen backdrop-blur-2xl bg-black/50 text-center ease-in duration-150"
            }
          >
            <Image
              src="/assets/close.png"
              width={30}
              height={30}
              alt="close"
              onClick={handleNav}
              className=" w-[32px] h-[32px] ml-8 lg:hidden"
            />
            <div className="flex justify-center w-full">
              <ul>
                {menuLinks.map((link, index) => (
                  <Link href={link.url} key={index}>
                    <li
                      key={index}
                      className="text-white px-20 py-6 text-2xl border-b-2 border-white my-8 rounded-md md:px-44 md:py-20"
                    >
                      {link.text}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-row">
            <Link href="/cart">
              <Image
                src="/assets/cart.png"
                width={30}
                height={30}
                alt="cart"
                className=" w-[24px] h-[24px]"
              />
            </Link>

            {loggedIn ? (
              <div>
                <Image
                  src="/assets/profile.png"
                  width={30}
                  height={30}
                  alt="profile"
                  className="ml-2 w-[24px] h-[24px] hover:cursor-pointer"
                  onClick={handleProfileClick}
                />

                <div
                  className={
                    showMenu
                      ? "absolute bottom-0 right-0 top-0 z-10 h-[100%] flex flex-col gap-4 text-white backdrop-blur-2xl bg-black/40 w-[300px] pr-4 pt-10 ease-in duration-200"
                      : "absolute bottom-0 right-0 hidden top-0 z-10 h-screen flex-col gap-4 text-white backdrop-blur-2xl bg-black/40 w-[300px] pr-4 pt-10 ease-in duration-200"
                  }
                >
                  <div className="flex flex-row items-end justify-end">
                    <Image
                      src="/assets/close_button.svg"
                      width={32}
                      height={32}
                      alt="profile"
                      className="mb-4 hover:cursor-pointer"
                      onClick={handleProfileClick}
                    />
                  </div>
                  <div className="flex flex-col gap-8 px-4 items-left">
                    <div className="flex flex-row gap-4 transform transition duration-300 hover:scale-110">
                      <Image
                        src="/assets/person.png"
                        width={36}
                        height={36}
                        alt="profile"
                        className=""
                        onClick={handleProfileClick}
                      />
                      <Link href="/profile" className="text-3xl">
                        <p className="text-left ">Profile</p>
                      </Link>
                    </div>

                    <div className="flex flex-row gap-4 transform transition duration-300 hover:scale-110">
                      <Image
                        src="/assets/cart.png"
                        width={36}
                        height={36}
                        alt="profile"
                        className=""
                        onClick={handleProfileClick}
                      />
                      <Link href="/fundsRaised" className="text-3xl">
                        <p className="text-left">Funds Raised</p>
                      </Link>
                    </div>
                    <div className="flex flex-row gap-4 transform transition duration-300 hover:scale-110">
                      <Image
                        src="/assets/cart.png"
                        width={36}
                        height={36}
                        alt="profile"
                        className=""
                        onClick={handleProfileClick}
                      />
                      <Link href="/fundsGiven" className="text-3xl">
                        <p className="text-left">Funds Given</p>
                      </Link>
                    </div>

                    <div className="flex flex-row gap-4 transform transition duration-300 hover:scale-110">
                      <Image
                        src="/assets/logout.png"
                        width={36}
                        height={36}
                        alt="profile"
                        className=""
                      />
                      <button
                        onClick={handleLogout}
                        className="text-3xl text-left"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link href="/">
                <Image
                  src="/assets/profile.png"
                  width={30}
                  height={30}
                  alt="profile"
                  className="ml-2 w-[24px] h-[24px]"
                  onClick={handleProfileClick}
                />
              </Link>
            )}
          </div>
        </div>
        <div className="relative flex justify-center items-center mx-2 max-w-screen lg:hidden">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
