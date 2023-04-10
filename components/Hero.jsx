"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import john from "../images/johnwick.jpg";
import { useStore } from "../store";
import Image from "next/image";
const Hero = () => {
  const { movieStore } = useStore();

  const movies = movieStore.slice(1, 6);
  // console.log(images);

  const [currentMovie, setCurrentMovie] = useState(0);
  const [previousMovie, setPreviousMovie] = useState(0);

  const changeMovie = (i) => {
    setPreviousMovie(currentMovie);
    setCurrentMovie(i);
  };

  const swipeLeftClickHandler = () => {
    if (currentMovie > 0) {
      changeMovie(currentMovie - 1);
    }
  };

  const swipeRightClickHandler = () => {
    if (currentMovie < movies.length - 1) {
      changeMovie(currentMovie + 1);
    } else changeMovie(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMovie < movies.length - 1) {
        changeMovie(currentMovie + 1);
      } else changeMovie(0);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentMovie]);
  return (
    <div
      className="relative h-[40rem] overflow-hidden lg:h-[50rem] 
    rounded-2xl md:rounded-3xl"
    >
      <div className="absolute top-0 left-0 z-10 h-full w-full px-5 pt-16 sm:px-8 sm:pt-16 md:px-20 lg:pt-40 xl:px-24">
        <div className="pt-[8rem] md:pt-0">
          <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl">
            <h2 className="font-eurostar-extended font-bold text-3xl uppercase text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Download Latest Movies
            </h2>
          </div>
          <p className="my-6 font-manrope text-xs font-medium text-white sm:max-w-xl sm:text-sm lg:max-w-3xl lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex,
            itaque iure dolorem distinctio sapiente blanditiis quis
            reprehenderit id maxime ipsum minima quaerat ut animi hic cum nisi
            amet placeat.
          </p>
          <div className="mt-8 flex gap-x-8">
            <button
              className="border-2 flex w-10 h-10 rounded-full justify-center items-center"
              onClick={swipeLeftClickHandler}
            >
              <FaArrowLeft />
            </button>
            <button
              className="border-2 w-10 h-10 rounded-full justify-center flex items-center"
              onClick={swipeRightClickHandler}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <ul
        className="flex h-full transition-transform duration-1000"
        style={{ transform: `translateX(-${currentMovie * 100}%)` }}
      >
        {movies.map((movie, i) => (
          <li key={i} className="h-full w-full shrink-0">
            <img
              width="1440"
              height="838"
              className="h-full w-full object-cover"
              src={movie.CoverPhotoLink}
              alt="movies"
              sizes="100vw"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
