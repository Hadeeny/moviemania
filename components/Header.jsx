"use client";
import movie from "../images/movie.svg";
import React, { useState, useEffect } from "react";
import close from "../images/cancel1.svg";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [query, setQuery] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div
    // className="flex fixed top-0 left-0 right-0 w-full py-8 px-2 bg-black/50 backdrop-blur-md justify-between items-center"
    >
      <header className="w-full bg-transparent z-[500] absolute py-8 px-4 md:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <h1 className="uppercase font-bold text-2xl">Moviemania.</h1>
          </Link>
          {/* Nav container */}
          <ul className="hidden md:flex space-x-8">
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
                href={"/marketplace"}
                className="relative group uppercase focus:underline"
              >
                movie
              </Link>
            </li>
            <li>
              <Link
                href={"/auction"}
                className="relative uppercase focus:underline"
              >
                contact
              </Link>
            </li>
            <li>
              <Link
                href={"/drops"}
                className="relative group uppercase focus:underline"
              >
                Search
              </Link>
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
          {/* <div className="flex  md:space-x-4">
            <img className="cursor-pointer w-8" src={search} />
            <Link href={"/cart"} className="relative">
              <img className="cursor-pointer w-8" src={cart} />
              <span className="absolute -top-2 -right-2 text-white w-5 h-5 flex justify-center items-center rounded-full bg-red-400">
                {cartItems.length}
              </span>
            </Link>
            <img
              className="hidden md:block cursor-pointer w-8"
              src={notification}
            />
          </div> */}
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 h-screen ${
          toggleMenu ? "left-0" : "left-full"
        } w-screen p-6 bg-[#16151b] z-[4000] duration-600 md:hidden`}
      >
        {/* header */}
        <div className="flex justify-between">
          <Link href={"/"}>
            <h1 className="uppercase font-bold text-2xl">Moviemania.</h1>
          </Link>
          <div
            className="text-white text-3xl uppercase cursor-pointer"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            X
          </div>
        </div>
        {/* mobile nav item */}
        <ul className="space-y-8 mt-10">
          <li>
            <Link
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
              className="text-2xl"
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
              href={"/drops"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// <Link
//   className="bg-green-500 hover:bg-green-300 focus:bg-green-300 px-4 py-1 rounded"
//   href={`/search/${query}`}
// >
//   Search
// </Link>
