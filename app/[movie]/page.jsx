import Link from 'next/link'
// export async function generateStaticParams() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
//   );
//   const res = await data.json();
//   return res.results.map((movie) => ({
//     movie: toString(movie.id),
//   })); 
// }

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const movieTitle = movie.split('%20').join(' ')
  const imagePath = "https://image.tmdb.org/t/p/original/";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  const films = await fetch(
    `https://tfvids-node.onrender.com/getData/?page=2&engine=nkiri,fzmovies`
  )
 


  const film = await films.json()
  
  
  const singleMovie = await film.find(movie => movie.Index === movieTitle);
  return (
    <div>
      {/* <div>
        <h1 className="text-2xl">{singleMovie.Title}</h1>
        <h2 className="text-lg">{singleMovie.Year}</h2>
        <h2 className="text-lg">Category: {singleMovie.Category}</h2>
        <h2 className="text-lg">Download Size: {singleMovie.Size}</h2>
        <div className="my-12 w-full">
          <img
            width="1000px"
            height="1000px"
            src={singleMovie.CoverPhotoLink}
          />
        </div>
        <p>{singleMovie.Description}</p>
          <a href={singleMovie.DownloadLink} target="_blank" className="bg-green-400 px-4 py-1 text-sm rounded-md inline-block">
            Download
          </a>
        
      </div> */}
    </div>
  );
}
