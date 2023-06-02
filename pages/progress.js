import { account } from '@/appwrite/appwrite'
import NotLoggedIn from '@/components/NotLoggedIn'
import ProgressForm from '@/components/ProgressForm'
import ProgressTrack from '@/components/ProgressTrack'
import TailwindToaster from '@/components/TailwindToaster'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function Progress() {
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
                // toast.success("Let's track your daily progress!!")
                console.log(userDetails);
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
            }
        )
    })
    // console.log(userDetails.$id);
    return (
        <>
            {userDetails ? (
                <>
                    <div>
                        <ProgressForm userId={userDetails.$id} />
                        <ProgressTrack userId={userDetails.$id} />
                    </div>
                </>
            ) : (
                <NotLoggedIn />
            )}
            <TailwindToaster />
        </>
    )
}
