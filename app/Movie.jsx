"use client";
import { useStore } from "../store";
import thirteen from "../public/thirteen.svg";
import Link from "next/link";
import Image from "next/image";
const Movie = ({ title, poster_path, id, release_date, film }) => {
  const { getTitle } = useStore();
  return (
    <div>
      <Link href={`/${title}`}>
        <img
          src={poster_path}
          className="rounded-md"
          width="800px"
          height="800px"
          alt={title}
        />
      </Link>
      <div className="flex  justify-between my-4">
        <h1>{title}</h1>
        <h2 className="text-yellow-300">{release_date}</h2>
      </div>
    </div>
  );
};

export default Movie;
