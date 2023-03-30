"use client";
import { useStore } from "../store";
import thirteen from "../public/thirteen.svg";
import Link from "next/link";
import Image from "next/image";
const Movie = ({ title, poster_path, id, release_date, film }) => {
  const { getTitle } = useStore();
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>

      <Link onClick={getTitle(title)} href={`/${title}`}>
        <img src={poster_path} width="800px" height="800px" alt={title} />
      </Link>
    </div>
  );
};

export default Movie;
