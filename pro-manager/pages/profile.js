import { account } from '@/appwrite/appwrite'
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
                <div className="flex flex-col text-center text-5xl font-bold gap-4">
                    <p> Please Login To see Profile</p>
                    <Link href="/login">
                        <span className="bg-pink-600 text-2xl px-4 py-2 cursor-pointer text-white rounded-md">
                            Login
                        </span>
                    </Link>
                </div>
            )}
        </>
    )
}
