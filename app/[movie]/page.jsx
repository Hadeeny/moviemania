'use client'
import {useState, useEffect} from 'react'
export default function MovieDetail({ params }) {
  const [single, setsingle] = useState([])
  const { movie } = params;
  const getSingle = async ()=>{
    const movieTitle = movie.split('%20').join(' ')
  const films = await fetch(
    `https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`
  )
  const film = await films.json()
  const singleMovie = await film.find(movie => movie.Title === movieTitle);
  setsingle(singleMovie)
}

useEffect(() => {
  getSingle()
}, [])

const { Title, Year, Size, Category, CoverPhotoLink, Description, DownloadLink} =  single
  
  
  return (
    <div>
      <div>
        <h1 className="text-2xl">{Title}</h1>
        <h2 className="text-lg">{Year}</h2>
        <h2 className="text-lg">Category: {Category}</h2>
        <h2 className="text-lg">Download Size: {Size}</h2>
        <div className="my-12 w-full">
          <img
            width="1000px"
            height="1000px"
            src={CoverPhotoLink}
          />
        </div>
        <p>{Description}</p>
          <a href={DownloadLink} target="_blank" className="bg-green-400 px-4 py-1 text-sm rounded-md inline-block">
            Download
          </a>
        
      </div>
    </div>
  );
}
