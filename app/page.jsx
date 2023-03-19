import Header from '../component/Header'
import Movie from './Movie'
export default async function Home() {

 const films = await fetch(
    `https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`
  )
  const film = await films.json()
  return ( 
    <main >
      <Header/>
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
  )
} 