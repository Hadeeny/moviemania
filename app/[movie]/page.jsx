export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original/";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <div>
      <div>
        <h1 className="text-2xl">{res.title}</h1>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2 className="text-lg">Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-400 px-4 py-1 text-sm rounded-md inline-block">
          {res.status}
        </h2>
        <div className="my-12 w-full">
          <img
            width="1000px"
            height="1000px"
            src={imagePath + res.backdrop_path}
          />
        </div>
        <p>{res.overview}</p>
      </div>
    </div>
  );
}
