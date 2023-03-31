import React from "react";
import john from "../images/johnwick.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="h-screen mb-[8rem]">
      <div className="relative">
        <Image
          className="hidden md:flex"
          alt="john wick"
          width={2000}
          src={john}
        />
      </div>
      <div className="absolute w-full inset-x-0 top-0 h-screen">
        <div className="outer">
          <div className="md:px-10 px-4 font-bold leading-[4rem] md:leading-[4.5rem] text-[3rem] md:text-[4rem] middle">
            <h1 className="text-[#e4d804] text-3xl">Moviemania</h1>
            <h2>Unlimited Movies,</h2>
            <h2>TV shows & more</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
