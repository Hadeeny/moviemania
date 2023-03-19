import './globals.css'
import { Poppins } from '@next/font/google'
import Link from 'next/link'
import Header from '../component/Header'
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
      {/* <Header /> */}
        {children}</body>
    </html>
  )
}
