'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'


const Button = () => {
    const [page, setPage] = useState(1)
const router = useRouter()

const changePage = ()=>{
    setPage(page=>page + 1)
    router.push(`/?page=${encodeURIComponent(page)}`)
}
    return (
    <button onClick={changePage}>Next</button>
  )
}

export default Button