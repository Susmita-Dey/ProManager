import { account } from '@/appwrite/appwrite'
// import Board from '@/components/Board'
import KanbanBoard from '@/components/KanbanBoard'
import NotLoggedIn from '@/components/NotLoggedIn'
import React, { useEffect, useState } from 'react'

export default function Kanban() {
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
            {userDetails ? (
                <>
                    {/* <section className="min-h-full flex flex-col py-12 sm:px-6 lg:px-8">
                        <div className='flex flex-row justify-center items-center gap-5'> */}
                    {/* <Board /> */}
                    {/* Hello */}
                    <KanbanBoard />
                    {/* </div>
                    </section> */}
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}
