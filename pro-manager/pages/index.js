import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { account } from '@/appwrite/appwrite'
import DashboardComponent from '@/components/DashboardComponent'

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
            Hello World
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
