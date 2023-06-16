import { useEffect, useState } from 'react'
import { account } from '@/appwrite/appwrite'
import HeroSection from '@/components/HeroSection'
import Head from 'next/head'
import Newsletter from '@/components/Newsletter'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FaqComponent from '@/components/FaqComponent'
import UseCaseComponent from '@/components/UseCaseComponent'
import Dashboard from './dashboard'

export default function Home() {
  const [userDetails, setUserDetails] = useState('')

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
        <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!userDetails ? (
        <>
          <main
            className='min-h-screen text-white'
          >
            <HeroSection />
            <About />
            <UseCaseComponent />
            <Testimonials />
            <FaqComponent />
            <Newsletter />
          </main>
        </>
      ) : (
        <>
          <Dashboard />
        </>
      )
        // )
      }
    </>
  )
}
