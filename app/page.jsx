import Movie from './Movie'
// import { Montserrat } from '@next/font/google'

// const inter = Montserrat({ subsets: ['latin'] })
export default async function Home() {
 
  const data = await 
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const response = await data.json()
  const films = await fetch(
    `https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`
  )
  const film = await films.json()
  return ( 
    <main >
      
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
      <button >Next page</button>
    </main>
  )
}
// 2b45e9552b313fdbdc9b126c8ff304e7