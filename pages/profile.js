import { account } from '@/appwrite/appwrite'
import Loader from '@/components/Loader'
import ProfileBg from '@/components/ProfileBg'
import ProfilePage from '@/components/ProfilePage'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function Profile() {
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
    })
    return (
        <>
            <Head>
                <title>ProManager | Your Profile</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {userDetails ? (
                <>
                    <ProfileBg />
                    <ProfilePage />
                </>
            ) : (
                <Loader />
            )}
        </>
    )
}
