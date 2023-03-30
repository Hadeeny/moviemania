"use client";
import { useStore } from "../store";
import Movie from "../app/Movie";
const Movies = ({ film }) => {
  const { kdramas, addDrama } = useStore();
  addDrama(film);
  return (
    <>
      {film.map((movie, index) => (
        <Movie
          title={movie.Title}
          key={index}
          id={index}
          poster_path={movie.CoverPhotoLink}
          release_date={movie.UploadDate}
        />
      ))}
    </>
  );
};

export default Movies;
