"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";
import { BiTime } from "react-icons/bi";
import { useStore } from "../../../store";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const search = ({ params }) => {
  const { addToResults } = useStore();
  const { searchquery } = params;
  const decodedTitle = decodeURI(searchquery);
  const { data, error, isLoading } = useSWR(
    `https://tfvids.onrender.com/search?query=${searchquery}&engine=nkiri`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="mt-[8rem] flex justify-center overflow-hidden">
        <div className="w-12 h-12 border-4 overflow-hidden border-b-transparent rounded-full animate-spin border-white"></div>
      </div>
    );
  }

  if (data) {
    addToResults(data);
    return (
      <>
        <div className="flex px-4 mt-[8rem] justify-center md:justify-between">
          <div className="flex w-full lg:w-2/3 gap-y-8 flex-col">
            <div className="py-8 rounded-md bg-[#1f1e24] px-6 font-bold text-2xl">
              Showing <span className="text-yellow-400">{data.length}</span>{" "}
              Results for: {decodedTitle}
            </div>
            {data.map((movie, i) => (
              <div
                className="bg-[#1f1e24] gap-y-8 w-full flex flex-col"
                key={i}
              >
                <div>
                  <Image
                    className="rounded-md"
                    width={500}
                    height={500}
                    src={movie.CoverPhotoLink}
                  />
                </div>
                <div className="px-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <BiTime color="rgb(250 204 21)" /> <p>{movie.Year}</p>
                  </div>
                  <h3 className="text-white font-bold text-3xl">
                    {movie.Title}
                  </h3>
                  <p className="font-normal text-lg text-gray-400">
                    {movie.Description}
                  </p>
                  <div className="border-t-4 flex justify-between items-center py-6 border-black">
                    <div className="flex justify-between items-center">
                      <div>Admin</div>
                      <div>No Comment</div>
                    </div>
                    <Link
                      href={`/singlemovie/${i}`}
                      className="text-yellow-400 font-bold"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden justify-end items-start md:flex w-1/3 ">
            <div className="w-10/12 bg-[#1f1e24] gap-y-4 flex-col flex justify-center items-start h-[20rem]">
              <div className="w-10/12 mx-auto">
                <div className="font-bold text-2xl text-white">
                  Search Objects
                </div>
                <div className="w-[4rem] bg-yellow-400 h-1" />
              </div>
              <div className="w-10/12 mx-auto flex">
                <input className="px-4 bg-[#393939] outline-none text-white w-10/12 h-[3rem]" />
                <div className="w-2/12 bg-yellow-400 h-[3rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // return (
  //   <>
  //     <div className="mt-[8rem]">
  //       {isLoading && (
  //         <div className="mt-[8rem]">
  //           <p className="text-center">Loading...</p>
  //         </div>
  //       )}
  //       {data && data.length <= 1 ? (
  //         <div className="text-center text-gray-400">
  //           sorry ☹ no results were found for:{" "}
  //           <span className="text-red-300">{searchquery}</span>, please try a
  //           new search or checkback later
  //         </div>
  //       ) : (

  //       )}
  //     </div>
  //   </>
  // );
};

export default search;
