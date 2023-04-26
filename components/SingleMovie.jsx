"use client";
import React from "react";
import { useStore } from "../store";
import Image from "next/image";

const SingleMovie = ({ title }) => {
  const { movieStore } = useStore();
  const movieTitle = title.split("%20").join(" ");

  if ((movieStore !== null || undefined) && movieStore.length !== 0) {
    const singleMovie = movieStore.find((movie) => movie.Title == movieTitle);
    const { Title, Category, Year, CoverPhotoLink, Description, DownloadLink } =
      singleMovie;
    return (
      <div className="flex flex-col gap-y-6 mb-8 md:flex-row">
        <div className="w-full px-6 md:w-1/3">
          <Image
            priority
            width={2000}
            height={2000}
            className="rounded-md"
            alt={Title}
            src={CoverPhotoLink}
          />
        </div>
        <div className="w-full flex flex-col items-start gap-y-4 text-left px-8 md:w-2/3">
          <h3 className="text-xl md:text3xl font-bold text-yellow-300">
            New Movie
          </h3>
          <h3 className="text-3xl font-bold md:text-[3rem]">{Title}</h3>
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-2 items-center font-bold">
              <div className="px-2 py-1 bg-white text-black uppercase">
                pg 16
              </div>
              <div className="border-4 uppercase border-white px-2 py-0.5">
                hd
              </div>
            </div>
            <div className="font-bold">Comedy, Movies</div>
            <div className="text-yellow-300 font-bold">{Year}</div>
          </div>
          <p className="max-w-xl text-lg text-gray-200 font-semibold">
            {Description}
          </p>
          <a
            target="_blank"
            href={DownloadLink}
            className="px-[4rem] py-[1rem] md:py-[1.4rem] rounded-md bg-yellow-300 text-xl font-semibold text-black"
          >
            Download
          </a>
        </div>
      </div>
    );
  }
};

export default SingleMovie;
