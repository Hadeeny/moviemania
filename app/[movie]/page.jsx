async function getData(title) {
  // const res = await fetch('https://api.example.com/...');
  const res = await fetch(
    `https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const singleMovie = await data.find((movie) => movie.Title === title);
  return singleMovie;
}

export default async function MovieDetail({ params }) {
  const { movie } = params;

  const movieTitle = movie.split("%20").join(" ");
  const singleMovie = await getData(movieTitle);

  return (
    <div className="mt-[4rem] w-full md:w-1/3 mx-auto text-center flex flex-col justify-center">
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
    </div>
  );
}
