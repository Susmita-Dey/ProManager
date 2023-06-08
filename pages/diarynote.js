import { account } from '@/appwrite/appwrite'
import Diary from '@/components/Diary'
import DiaryNoteForm from '@/components/DiaryNoteForm'
import NotLoggedIn from '@/components/NotLoggedIn'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function DiaryNote() {
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
    })    // console.log(userDetails.$id);
    return (
        <>
            <Head>
                <title>ProManager | Take a Note</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {userDetails ? (
                <>
                    <DiaryNoteForm userId={userDetails.$id} />
                    <Diary userId={userDetails.$id} />
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}
