import { account } from '@/appwrite/appwrite'
import NotLoggedIn from '@/components/NotLoggedIn'
import ProgressForm from '@/components/ProgressForm'
import ProgressTrack from '@/components/ProgressTrack'
import TailwindToaster from '@/components/TailwindToaster'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function Progress() {
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
                // toast.success("Let's track your daily progress!!")
                console.log(userDetails);
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
            }
        )
    })
    // console.log(userDetails.$id);
    return (
        <>
            <Head>
                <title>ProManager | Progress Tracker</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {userDetails ? (
                <>
                    <div>
                        <ProgressForm userId={userDetails.$id} />
                        <ProgressTrack userId={userDetails.$id} />
                    </div>
                </>
            ) : (
                <NotLoggedIn />
            )}
            <TailwindToaster />
        </>
    )
}
