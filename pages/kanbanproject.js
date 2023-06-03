import { account } from '@/appwrite/appwrite'
import KanbanBoard from '@/components/KanbanBoardComponent'
import NotLoggedIn from '@/components/NotLoggedIn'
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
