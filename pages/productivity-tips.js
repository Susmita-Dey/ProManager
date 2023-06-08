import { account } from '@/appwrite/appwrite'
import NotLoggedIn from '@/components/NotLoggedIn'
import StaticProTips from '@/components/StaticProTips'
import TailwindToaster from '@/components/TailwindToaster'
import TipsForm from '@/components/TipsForm'
import TipsList from '@/components/TipsList'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function ProductivityTips() {
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
                toast.success("Here are some productivity tips to unlock your success!!")
                console.log(userDetails);
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
            }
        )
    }, [])
    // console.log(userDetails.$id);
    return (
        <>
            <Head>
                <title>ProManager | Productivity Tips</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {userDetails ? (
                <>
                    <TipsForm userId={userDetails.$id} />
                    <TipsList userId={userDetails.$id} />
                    <StaticProTips />
                </>
            ) : (
                <NotLoggedIn />
            )}
            <TailwindToaster />
        </>
    )
}
