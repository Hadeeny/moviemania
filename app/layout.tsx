import './globals.css'
import { Poppins } from '@next/font/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`my-12 mx-28`}>
      <h1 className='text-5xl text-green-500 my-8'>Movie<span className='text-cyan-700'>Mania</span></h1>
        {children}</body>
    </html>
  )
}
