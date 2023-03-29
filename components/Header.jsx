"use client";
import movie from "../images/movie.svg";
import React, { useState, useEffect } from "react";
import Link from "next/link";
const Header = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex fixed top-0 left-0 right-0 w-full py-8 px-2 bg-black/50 backdrop-blur-md justify-between items-center">
      <Link href={"/"}>
        <h1 className="text-md lg:text-3xl text-green-500">
          Movie<span className="text-cyan-700">Mania</span>
        </h1>
        {/* <img className='w-[2rem]' alt='movie' src={movie}/> */}
      </Link>
      <div className="space-x-4">
        <input
          placeholder="search movies..."
          className="text-black py-1 rounded px-2 outline-none"
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
        <Link
          className="bg-green-500 hover:bg-green-300 focus:bg-green-300 px-4 py-1 rounded"
          href={`/search/${query}`}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Header;
