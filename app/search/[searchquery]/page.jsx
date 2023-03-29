// 'use client'
import { Link } from "next/link";
import React from "react";

async function getData(params) {
  // const res = await fetch('https://api.example.com/...');
  const res = await fetch(
    `https://tfvids.onrender.com/search?query=${params}&engine=fzmovies`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page({ params }) {
  const { searchquery } = params;
  const data = await getData(searchquery);
  return (
    <div className="mt-[4rem]">
      {data.length <= 1 ? (
        <div className="text-center text-gray-400">
          sorry ☹ no results were found for:{" "}
          <span className="text-red-300">{searchquery}</span>, please try a new
          search or checkback later
        </div>
      ) : (
        <>
          <div className="text-center py-8 text-gray-400">
            showing {data.length} results for: {searchquery}
          </div>
          <div className="grid gap-16 grid-cols-fluid">
            {data.map((movie, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-y-2 items-center"
              >
                <div className="font-semibold text-gray-100">{movie.Title}</div>
                <a href={`/singlemovie/${movie.Title}`}>
                  <img src={movie.CoverPhotoLink} alt={searchquery} />
                </a>
                <p>{movie.Category}</p>
                <p>{movie.Size}</p>
                <a
                  href={movie.DownloadLink}
                  target="_blank"
                  className="bg-green-400 flex justify-center py-1 w-[10rem] rounded"
                  download
                >
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
