import { account } from '@/appwrite/appwrite';
import NotLoggedIn from '@/components/NotLoggedIn';
import Timer from '@/components/Timer';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';

export default function Stopwatch() {
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        const getData = account.get();
        getData.then(
            function (response) {
                setUserDetails(response);
                // toast.success("Let's track your daily progress!!");
                console.log(userDetails);
            },
            function (error) {
                toast.error(error.message);
                console.log(error);
            }
        );
    }, []);

    return (
        <>
            <Head>
                <title>ProManager | Track Time</title>
                <meta name="description" content="ProManager - Organize tasks with KanbanBoard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {userDetails ? (
                <Timer />
            ) : (
                <NotLoggedIn />
            )
            }
        </>
    );
}
