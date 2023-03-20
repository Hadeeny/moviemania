// 'use client'
import { Link } from 'next/link'
import React from 'react'

export default async function page({params}) {
  const {searchquery }= params
  const response = await fetch(`https://tfvids.onrender.com/search?query=${searchquery}&engine=fzmovies`)
  const data = await response.json()
  // console.log(data)
  // console.log(searchquery)
  
  return ( 
    <div className='mt-[4rem]'> 
      {data.length<=1? (<div className='text-center text-gray-400'>sorry ☹ no results were found 
      for: <span className='text-red-300'>{searchquery}</span>, please try a new search or checkback later</div>): (
        <>
        <div className='text-center py-8 text-gray-400'>showing {data.length} results for: {searchquery}</div>
      <div className='grid gap-16 grid-cols-fluid'>
      {data.map((movie, index)=>(
        <div 
        key={index}
        className='w-full flex flex-col gap-y-2 items-center'
        >
          <div className='font-semibold text-gray-100'>{movie.Title}</div>
          <a href={`/singlemovie/${movie.Title}`}>
            <img src={movie.CoverPhotoLink} alt={searchquery} />
          </a>
          <p>{movie.Category}</p> 
          <p>{movie.Size}</p> 
          <a href={movie.DownloadLink} target="_blank" className='bg-green-400 flex justify-center py-1 w-[10rem] rounded'>
            <span>Download</span>
            {/* <img src={vercel} alt='download'/> */}
          </a>
        </div>
      ))}
      </div>
        </>
      )}
    </div> 
  )
}