import './globals.css'
import { Poppins } from '@next/font/google'
import Link from 'next/link'
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
      <body className={`my-12 mx-[2rem]`}>
      <Link href={'/'}>
      <h1 className='text-3xl md:text-5xl text-green-500 my-8'>Movie<span className='text-cyan-700'>Mania</span></h1>
      </Link>
        {children}</body>
    </html>
  )
}
