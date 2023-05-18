import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-gray-950 text-white ${inter.className}`}
    >
      Hello World
    </main>
  )
}
