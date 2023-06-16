import { useEffect, useState } from 'react'
import { account } from '@/appwrite/appwrite'
import DashboardComponent from '@/components/DashboardComponent'
import Head from 'next/head'
import NotLoggedIn from '@/components/NotLoggedIn'

export default function Dashboard() {
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
                <title>ProManager | Dashboard</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!userDetails ? (
                <>
                    <NotLoggedIn />
                </>
            ) : (
                <>
                    <DashboardComponent username={userDetails.name} userId={userDetails.$id} />
                </>
            )
            }
        </>
    )
}
