import TodoForm from '@/components/TodoForm'
import Todos from '@/components/Todos'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { account } from '@/appwrite/appwrite'
import NotLoggedIn from '@/components/NotLoggedIn'
import Head from 'next/head'


function TaskList() {
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
                <title>ProManager | TaskList</title>
                <meta name="description" content="ProManager - Orgranize tasks with KanbanBoard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {userDetails ? (
                <>
                    <div>
                        <TodoForm userId={userDetails.$id} />
                        <Todos userId={userDetails.$id} />
                    </div>
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}

export default TaskList