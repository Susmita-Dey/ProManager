import { account } from '@/appwrite/appwrite'
// import Board from '@/components/Board'
import KanbanBoard from '@/components/KanbanBoardComponent'
import NotLoggedIn from '@/components/NotLoggedIn'
import React, { useEffect, useState } from 'react'
import { DragDropContextProvider } from "react-beautiful-dnd";


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
                    {/* <section className="min-h-full flex flex-col py-12 sm:px-6 lg:px-8">
                        <div className='flex flex-row justify-center items-center gap-5'> */}
                    {/* <Board /> */}
                    {/* Hello */}
                    {/* <DragDropContextProvider> */}
                    <KanbanBoard userId={userDetails.$id} />
                    {/* </DragDropContextProvider> */}
                    {/* </div>
                    </section> */}
                </>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}
