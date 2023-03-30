"use client";
import React from "react";
import { useStore } from "../store";

const SingleMovie = ({ title }) => {
  const { movieStore } = useStore();
  const movieTitle = title.split("%20").join(" ");

  if ((movieStore !== null || undefined) && movieStore.length !== 0) {
    const singleMovie = movieStore.find((movie) => movie.Title == movieTitle);
    return (
      <div>
        <h1 className="text-2xl">{singleMovie.Title}</h1>
        <h2 className="text-lg">{singleMovie.Year}</h2>
        <h2 className="text-lg">Category: {singleMovie.Category}</h2>
        <h2 className="text-lg">Download Size: {singleMovie.Size}</h2>
        <div className="my-12 w-full">
          <img className="w-[14rem] mx-auto" src={singleMovie.CoverPhotoLink} />
        </div>
        <p className="mb-4">{singleMovie.Description}</p>
        <a
          download
          href={singleMovie.DownloadLink}
          target="_blank"
          className="bg-green-400 px-6 py-2 text-sm rounded-md inline-block"
        >
          Download
        </a>
      </div>
    );
  }
};

export default SingleMovie;
