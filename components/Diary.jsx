import React, { useEffect, useState } from 'react'
import { databases, storage } from '@/appwrite/appwrite'
import { Query } from 'appwrite'
import toast from 'react-hot-toast'
import TailwindToaster from './TailwindToaster'
import Image from 'next/image'
import DiaryCard from './DiaryCard'
import { MdDeleteForever } from 'react-icons/md'

function Diary(userId) {
    const [diary, setDiary] = useState([])
    const [loader, setLoader] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // console.log(userId.userId);
    useEffect(() => {
        setLoader(true)
        const getDiary = databases.listDocuments("646605464de2f5cb7435", "64660b181c0af1741d29", [
            Query.equal("created_by", [userId.userId])])
        getDiary.then(
            function (response) {
                setDiary(response.documents)
                console.log(response.documents);
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
            }
        )
        setLoader(false)
    }, [])

    const deleteNote = (id) => {
        const promise = databases.deleteDocument("646605464de2f5cb7435", "64660b181c0af1741d29", id)
        promise.then(
            function (response) {
                toast.success("Note deleted successfully!!")
                console.log(response);
                window.location.reload();
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
                // window.location.reload()
            }
        )
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = (updatedData) => {
        // Perform the Appwrite API request to update the document
        // Replace the following code with the actual Appwrite API call

        console.log('Updated data:', updatedData);

        // Close the modal
        handleCloseModal();
    };

    return (
        <div className="max-w-7xl container lg:px-8 px-5 mx-auto">
            <p className="text-xl font-bold mb-2 text-white">Your Secret Notes</p>
            {loader ? (
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-pink-800 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only text-white">Loading...</span>
                </div>
            ) : (
                <div className='flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4'>
                    {diary && diary.map((item) => (
                        <div key={item.$id} className="p-4 flex flex-col items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4">
                            <button
                                className="absolute top-2 right-2 flex text-white font-medium p-2 text-center border border-red-500 hover:bg-rose-900 rounded-md"
                                onClick={() => {
                                    deleteNote(item.$id)
                                }}
                            >
                                {/* Delete */}
                                <MdDeleteForever className='text-2xl' />
                            </button>
                            <DiaryCard key={item.$id} imageFileId={item.image} diaryTitle={item.diarytitle} diaryNote={item.diarynote} />
                            {/* <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                                <button
                                    className="flex text-white font-medium px-16 py-2 text-center border border-pink-900 bg-pink-900 rounded-md"
                                    onClick={handleOpenModal}
                                >
                                    Edit
                                </button>
                                <button
                                    className="flex text-white font-medium px-[3.5rem] py-2 text-center border border-red-500 hover:bg-rose-900 rounded-md"
                                    onClick={() => {
                                        deleteNote(item.$id)
                                    }}
                                >
                                    Delete
                                </button>
                            </div> */}
                        </div>
                    ))
                    }
                    {/* {isModalOpen && (
                        <EditModal document={document} onSave={handleSave} />
                    )} */}
                </div>
            )}
            <TailwindToaster />
        </div>
    )
}

export default Diary