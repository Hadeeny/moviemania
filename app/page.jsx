
import Movie from './Movie'
import Button from './Components/Button'
export default async function Home() {

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
      <Button/>
    </main>
  )
}
// 2b45e9552b313fdbdc9b126c8ff304e7