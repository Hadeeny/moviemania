"use client";
import Image from "next/image";
import React from "react";
import { useStore } from "../../../store";

export default function page({ params }) {
  const { resultStore } = useStore();
  const { index } = params;

  if ((resultStore !== null || undefined) && resultStore.length !== 0) {
    const result = resultStore[index];
    const { Title, DownloadLink, CoverPhotoLink, Year, Description } = result;
    return (
      <div className="flex mt-[8rem] flex-col gap-y-6 mb-8 md:flex-row">
        <div className="w-full px-6 md:w-1/4">
          <Image
            width={1000}
            height={1000}
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
}
