export default async function MovieDetail({ params }) {
  const { movie } = params;
 
  const movieTitle = movie.split('%20').join(' ')
  const films = await fetch(`https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`)
  const film = await films.json()
  const singleMovie = film.find(movie => movie.Title === movieTitle);
 return singleMovie
// const { Title, Year, Size, Category, CoverPhotoLink, Description, DownloadLink} =  singleMovie
  
   
  return ( 
    <div className="mt-[4rem] w-full md:w-1/3 mx-auto text-center flex flex-col justify-center">
      {/* <div>
        <h1 className="text-2xl">{singleMovie.Title}</h1>
        <h2 className="text-lg">{singleMovie.Year}</h2>
        <h2 className="text-lg">Category: {singleMovie.Category}</h2>
        <h2 className="text-lg">Download Size: {singleMovie.Size}</h2>
        <div className="my-12 w-full">
          <img
          className="w-[14rem] mx-auto"
            src={singleMovie.CoverPhotoLink}
          />
        </div>
        <p className="mb-4">{singleMovie.Description}</p>
          <a href={singleMovie.DownloadLink} target="_blank" className="bg-green-400 px-6 py-2 text-sm rounded-md inline-block">
            Download
          </a>
        
      </div> */}
    </div>
  );
}
