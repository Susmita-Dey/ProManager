import { account } from '@/appwrite/appwrite'
import NotLoggedIn from '@/components/NotLoggedIn'
import ProjectIdeas from '@/components/ProjectIdeas'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function IdeaList() {
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
                <title>ProManager | IdeaList</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {userDetails ? (
                <>
                    <div>
                        <ProjectIdeas userId={userDetails.$id} />
                    </div>
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}
