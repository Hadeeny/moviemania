import React from 'react'

export default function page({params}) {
    const {title} = params
    const decodedTitle = title.split('%20').join(' ')

    console.log(title)
  return (
    <div>
      <div>{title}</div>
    </div> 
  )
}
