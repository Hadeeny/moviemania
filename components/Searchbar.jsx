"use client";
import { FaSearch } from "react-icons/fa";
import { useStore } from "../store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Searchbar = () => {
  const { getQuery, searchQuery } = useStore();
  const router = useRouter();
  const [query, setQuery] = useState(searchQuery);
  const handleSearch = () => {
    getQuery(query);
    router.push(`/search/${query}`);
  };
  return (
    <div className="w-full flex">
      <input
        placeholder="what are you looking for?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 bg-[#393939] outline-none text-white w-10/12 h-[3rem]"
      />
      <div
        onClick={handleSearch}
        className="w-2/12 flex justify-center items-center cursor-pointer bg-yellow-400 h-[3rem]"
      >
        <FaSearch />
      </div>
    </div>
  );
};

export default Searchbar;
