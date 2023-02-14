import thirteen from '../public/thirteen.svg'
import Link from 'next/link'
import Image from 'next/image'
const Movie = ({title, poster_path, id, release_date}) => {
   const imagePath = 'https://image.tmdb.org/t/p/original/'
   
   return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            
            <Link href={`/${id}`}>
                <img src={imagePath+poster_path} width="800px" height="800px" alt={title}/>
            </Link>
        </div>
    )
}

export default Movie
