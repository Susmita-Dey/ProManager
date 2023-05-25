import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { account } from '@/appwrite/appwrite'
import DashboardComponent from '@/components/DashboardComponent'
import HeroSection from '@/components/HeroSection'

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
      {!userDetails ? (
        <>
          <main
            className={`min-h-screen text-white ${inter.className}`}
          >
            <HeroSection />
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
