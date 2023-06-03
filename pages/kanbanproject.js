import { account } from '@/appwrite/appwrite'
import KanbanBoard from '@/components/KanbanBoardComponent'
import NotLoggedIn from '@/components/NotLoggedIn'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function KanbanProject() {
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
                // console.log(userDetails);
            },
            function (error) {
                console.log(error);
            }
        )
    })
    return (
        <>
            <Head>
                <title>ProManager | KanbanBoard</title>
                <meta name="description" content="ProManager - Orgranize tasks with KanbanBoard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {userDetails ? (
                <>
                    <KanbanBoard userId={userDetails.$id} />
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}
