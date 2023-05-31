import { account } from '@/appwrite/appwrite'
import Diary from '@/components/Diary'
import DiaryNoteForm from '@/components/DiaryNoteForm'
import NotLoggedIn from '@/components/NotLoggedIn'
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
            {userDetails ? (
                <>
                    <div>
                        <DiaryNoteForm userId={userDetails.$id} />
                        <Diary userId={userDetails.$id} />
                    </div>
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}
