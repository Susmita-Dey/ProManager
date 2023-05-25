import { account } from '@/appwrite/appwrite'
import NotLoggedIn from '@/components/NotLoggedIn'
import ProfileBg from '@/components/ProfileBg'
import ProfilePage from '@/components/ProfilePage'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Profile() {
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
                    <ProfileBg />
                    <ProfilePage />
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}
