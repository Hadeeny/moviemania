"use client";
import { FaSearch } from "react-icons/fa";
import { useStore } from "../store";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import close from "../images/cancel1.svg";
import Link from "next/link";
import Image from "next/image";
import Searchbar from "@/components/Searchbar";
const Header = () => {
  const router = useRouter();
  const { getQuery } = useStore();
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const inputRef = useRef(null);
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  const searchMovie = () => {
    getQuery(query);
    router.push(`/search/${query}`);
  };

  return (
    <div>
      <header className="w-full bg-transparent z-[500] absolute py-8 px-4 md:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <h1 className="uppercase font-bold text-2xl">Moviemania.</h1>
          </Link>
          {/* Nav container */}
          <ul className="hidden font-bold md:flex items-center space-x-8">
            <li>
              <Link
                href={"/"}
                className="relative group uppercase focus:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="relative group uppercase focus:underline"
              >
                movie
              </Link>
            </li>
            <li>
              <Link href={"/"} className="relative uppercase focus:underline">
                contact
              </Link>
            </li>
            <li>
              <div className="relative  cursor-pointer group uppercase focus:underline">
                <FaSearch onClick={handleSearch} color="rgb(250 204 21) " />
              </div>
            </li>
          </ul>
          {/* hamburger img */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <div className="bg-white w-8 h-1" />
            <div className="bg-white my-1 w-8 h-1" />
            <div className="bg-white w-8 h-1" />
          </div>
        </div>
        <div className="w-full block mt-[1rem] md:hidden">
          <Searchbar />
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 h-screen ${
          toggleMenu ? "clip-active" : "clip-inactive"
        } w-screen p-6 bg-[#16151b] z-[4000] duration-700 md:hidden`}
      >
        <div className="flex justify-between">
          <Link href={"/"}>
            <h1 className="uppercase text-yellow-400 font-bold text-2xl">
              Moviemania.
            </h1>
          </Link>
          <div
            className="w-8 justify-center flex -space-y-1 flex-col items-center h-8 border rounded-md cursor-pointer"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <div className="w-6 rotate-45 h-1 bg-white" />
            <div className="w-6 h-1 -rotate-45 bg-white" />
          </div>
        </div>
        <ul className="space-y-8 font-bold mt-10">
          <li>
            <Link
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
              className="uppercase text-2xl"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
              className="uppercase text-2xl"
              href={"/"}
            >
              Movie
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
              className="text-2xl uppercase"
              href={"/"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
              className="uppercase text-2xl"
              href={"/"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
      {showSearch && (
        <div className="fixed top-0 bottom-0 left-0 backdrop-blur-md right-0 bg-black/80 z-[1] outer">
          <div className="middle">
            <div className="flex items-center justify-center">
              <input
                type="text"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                placeholder="Search Movies"
                className={`w-10/12 md:w-1/2 duration-500 p-2 text-xl bg-transparent outline-none border-b border-white`}
              />
              <div>
                <FaSearch
                  onClick={() => {
                    setShowSearch(false);
                    searchMovie();
                  }}
                  className="cursor-pointer w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
