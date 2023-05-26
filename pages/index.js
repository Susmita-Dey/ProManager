import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { account } from '@/appwrite/appwrite'
import DashboardComponent from '@/components/DashboardComponent'
import HeroSection from '@/components/HeroSection'
import Head from 'next/head'
import Newsletter from '@/components/Newsletter'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FaqComponent from '@/components/FaqComponent'
import UseCaseComponent from '@/components/UseCaseComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    const getData = account.get()
    getData.then(
      function (response) {
        setUserDetails(response)
        console.log(userDetails);
      },
      function (error) {
        console.log(error);
      }
    )
  }, [])

  return (
    <>
      <Head>
        <title>ProManager</title>
      </Head>
      {!userDetails ? (
        <>
          <main
            className={`min-h-screen text-white ${inter.className}`}
          >
            <HeroSection />
            <About />
            <UseCaseComponent />
            <Testimonials />
            <FaqComponent />
            <Newsletter />
          </main>
        </>
      ) :
        <>
          <div>
            <DashboardComponent username={userDetails.name} />
          </div>
        </>
      }
    </>
  )
}
