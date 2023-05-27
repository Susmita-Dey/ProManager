import { account } from '@/appwrite/appwrite'
import NotLoggedIn from '@/components/NotLoggedIn'
import ProjectIdeas from '@/components/ProjectIdeas'
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
    }, [])
    return (
        <>
            {userDetails ? (
                <>
                    <div>
                        <ProjectIdeas />
                    </div>
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}
