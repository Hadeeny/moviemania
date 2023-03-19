// 'use client'
// import React, {useState, useEffect} from 'react'
import Link from 'next/link'

const Header = () => {
    // const [query, setQuery] = useState('')
    // const [result, setResult] = useState([])
    
    // const getMovie = async ()=>{
    //     const response = await fetch(`https://tfvids.onrender.com/search?query=${'happiness'}&engine=fzmovies`)
    //     const data = await response.json()
    //     setResult(data)
    //     console.log(result)
    // }
    // useEffect(() => {
    //   getMovie()
    // }, []) 
    
  return (
    <div className='flex'>
      <Link href={'/'}>
      <h1 className='text-3xl md:text-5xl text-green-500 my-8'>Movie<span className='text-cyan-700'>Mania</span></h1>
      </Link> 
      {/* <input style={{color:'black'}} className='text-black p-2 outline-none' onChange={(e)=>setQuery(e.target.value)} type='text'/> */}
      {/* <button className='w-8 h-1 bg-blue-300 text-white' onClick={searchMovie}>Search</button> */}
    </div>
  )
}

export default Header