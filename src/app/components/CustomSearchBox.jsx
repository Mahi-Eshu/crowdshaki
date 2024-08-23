"use client";
import { useState } from "react";
import React from "react";
import { useSearchBox } from "react-instantsearch";
import CustomHits from "./CustomHits";
import Image from "next/image";

function CustomSearchBox(props) {
  const [showHits, setShowHits] = useState(false);

  const handleSearchBoxFocus = () => {
    setShowHits(true);
  };

  const handleSearchBoxBlur = () => {
    setTimeout(() => {
        setShowHits(false);
      }, 300);
  };



  const {
    query,
    refine,
    clear,
    // Deprecated
    isSearchStalled,
  } = useSearchBox(props);

  React.useEffect(() => {
    setShowHits(query.trim() !== "");
  }, [query]);

  return (
    <>
      <div className="relative flex items-center mx-2 lg:flex">
        <Image
          src="/assets/search.png"
          width={28}
          height={28}
          alt="Menu"
          className="absolute ml-4"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => refine(e.target.value)}
          className="w-[370px] md:w-[720px] lg:w-[300px] xl:w-[500px] h-11 px-14 placeholder-gray-600 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search"
          onFocus={handleSearchBoxFocus}
          onBlur={handleSearchBoxBlur}
        />
      </div>
      <CustomHits showHits={showHits} />
    </>
  );
}

export default CustomSearchBox;
