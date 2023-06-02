import React, { useEffect, useState } from 'react'
import { databases } from '@/appwrite/appwrite'
import { Query } from 'appwrite'
import toast from 'react-hot-toast'
import TailwindToaster from './TailwindToaster'
import Loader from './Loader'

function ProgressTrack(userId) {
    const [progress, setProgress] = useState()
    const [loader, setLoader] = useState(false)

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PROGRESS_TRACK_COLLECTION_ID;

    // console.log(userId.userId);
    useEffect(() => {
        setLoader(true)
        const getProgress = databases.listDocuments(databaseId, collectionId, [
            Query.equal("created_by", [userId.userId])])
        getProgress.then(
            function (response) {
                setProgress(response.documents)
                console.log(response.documents);
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
            }
        )
        setLoader(false)
    }, [])

    const deleteProgress = (id) => {
        const promise = databases.deleteDocument(databaseId, collectionId, id)
        promise.then(
            function (response) {
                toast.success("Progress deleted successfully!!")
                console.log(response);
                window.location.reload()
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
                // window.location.reload()
            }
        )
    }

    if (loader) {
        return (
            <Loader />
        );
    }

    return (
        <div className="max-w-7xl container lg:px-8 px-5 mx-auto my-4">
            <p className="text-xl font-bold mb-2 text-white">Progress Tracking List</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                {progress && progress.map((item) => (
                    <div key={item.$id} >
                        <div className="p-4 flex flex-col items-center justify-center border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4">
                            <div className='flex p-2 gap-3 border-b-2 border-white text-white'>
                                <p className='text-xl font-medium'>Date created:</p>
                                <p className='text-xl font-normal'>{((item.$createdAt).slice(0, 10))}</p>
                            </div>
                            <div className='flex p-2 gap-3 border-b-2 border-white text-white'>
                                <p className='text-xl font-medium'>Things accomplished yesterday:</p>
                                <p className='text-xl font-normal'>{item.done_yesterday}</p>
                            </div>
                            <div className='flex gap-3 p-2 border-b-2 border-white text-white'>
                                <p className='text-xl font-medium'>Things accomplished today:</p>
                                <p className='text-xl font-normal'>{item.doing_today}</p>
                            </div>
                            <div className='flex p-2 gap-3 border-b-2 border-white text-white'>
                                <p className='text-xl font-medium'>Achievements:</p>
                                <p className='text-xl font-normal'>{item.achievements}</p>
                            </div>
                            <div className='flex p-2 gap-3 border-b-2 border-white text-white'>
                                <p className='text-xl font-medium'>Learnings/Challenges:</p>
                                <p className='text-xl font-normal'>{item.learnings}</p>
                            </div>
                            <div className='flex hover:bg-pink-900 hover:rounded-md w-full justify-center items-center'>
                                <span
                                    className="text-white p-2 cursor-pointer"
                                    onClick={() => {
                                        deleteProgress(item.$id)
                                    }}
                                >
                                    Delete
                                </span>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <TailwindToaster />
        </div>
    )
}

export default ProgressTrack