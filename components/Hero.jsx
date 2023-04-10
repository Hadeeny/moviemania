"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";
import john from "../images/johnwick.jpg";
import { useStore } from "../store";
import Image from "next/image";
const Hero = () => {
  const { movieStore } = useStore();

  const cities = movieStore.slice(0, 5);
  // console.log(images);

  const [currentCity, setCurrentCity] = useState(0);
  const [previousCity, setPreviousCity] = useState(0);

  const changeCity = (i) => {
    setPreviousCity(currentCity);
    setCurrentCity(i);
  };

  const slideCity = (i) => {
    if (i === 0 || width >= 640) {
      return 0;
    } else if (i === 1 || i === 2 || i === 3 || i === 4) {
      if (i <= previousCity) {
        return -(i - 1) * (100 / 6);
      } else {
        return -i * (100 / 6);
      }
    } else if (i === 5) {
      return -(currentCity - 1) * (100 / 6);
    } else {
      return 0;
    }
  };

  const swipeLeftClickHandler = () => {
    if (currentCity > 0) {
      changeCity(currentCity - 1);
    }
  };

  const swipeRightClickHandler = () => {
    if (currentCity < 5) {
      changeCity(currentCity + 1);
    }
  };

  return (
    <div
      className="relative mt-32 mb-16 h-[40rem] overflow-hidden lg:h-[50rem] 
    rounded-2xl md:rounded-3xl"
    >
      <div className="absolute top-0 left-0 z-10 h-full w-full px-5 pt-16 sm:px-8 sm:pt-16 md:px-20 lg:pt-40 xl:px-24">
        <div className="">
          <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl">
            <h2 className="font-eurostar-extended text-3xl uppercase text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              The world IS our office
            </h2>
          </div>
          <p className="my-6 font-manrope text-xs font-medium text-white sm:max-w-xl sm:text-sm lg:max-w-3xl lg:text-lg">
            Our approach is focused on the idea that gaining knowledge about
            different cultures and pooling the best ideas from all around the
            world can be achieved from any location. We strongly believe that
            creative thinking can come from any part of the globe. Our
            dedication to flexible working arrangements enables us to stay
            connected to the global community and recognize and take advantage
            of the best ideas and solutions, regardless of their origin. By
            using technology, we can work with the best minds from all over the
            world while keeping a close-knit, collaborative team.
          </p>
          <div className="mt-8 flex items-center space-x-3">
            <button onClick={swipeLeftClickHandler}>
              <FaArrowLeft />
            </button>
            <button onClick={swipeRightClickHandler}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <ul
        className="flex h-full transition-transform duration-1000"
        style={{ transform: `translateX(-${currentCity * 100}%)` }}
      >
        {cities.map((city, i) => (
          <li key={i} className="h-full w-full shrink-0">
            <img
              width="1440"
              height="838"
              className="h-full w-full object-cover"
              src={city.CoverPhotoLink}
              alt=""
              sizes="100vw"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
