import Movie from './Movie'
// import { Montserrat } from '@next/font/google'

// const inter = Montserrat({ subsets: ['latin'] })

export default async function Home() {
  const data = await 
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const response = await data.json()
  return (
    <main >
      {response.results.map(movie=>(
        <Movie 
        title={movie.title}
        key={movie.id}
        id={movie.id}
        poster_path={movie.poster_path}
        release_date = {movie.release_date}
        />
      ))}
    </main>
  )
}
