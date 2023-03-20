import Movie from './Movie'
export default async function Home() {

 const films = await fetch(
    `https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`
  )
  const film = await films.json()
  return ( 
      <>
        {/* <Header/> */}
    <main className='mt-[4rem]'>
      <h2 className='text-xl font-semibold py-2'>Trending movies (latest)</h2>
      <div className='grid gap-16 grid-cols-fluid'>
      {film.map((movie, index)=>(
        <Movie  
        title={movie.Title}
        key={index} 
        id={index} 
        poster_path={movie.CoverPhotoLink}
        release_date = {movie.UploadDate}
        />
      ))} 
      </div>
    </main>
      </>
  )
} 