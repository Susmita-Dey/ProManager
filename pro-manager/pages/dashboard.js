import { account } from '@/appwrite/appwrite'
import DashboardComponent from '@/components/DashboardComponent'
import NotLoggedIn from '@/components/NotLoggedIn'
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
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
                        <DashboardComponent username={userDetails.name} />
                    </div>
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}

