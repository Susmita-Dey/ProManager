import React, { useEffect, useState } from 'react'
import { databases, storage } from '@/appwrite/appwrite'
import { Query } from 'appwrite'
import toast from 'react-hot-toast'
import TailwindToaster from './TailwindToaster'
import Image from 'next/image'
import DiaryCard from './DiaryCard'
import { MdDeleteForever } from 'react-icons/md'
import Loader from './Loader'

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

    if (loader) {
        return (
            <Loader />
        );
    }

    return (
        <div className="max-w-7xl container lg:px-8 px-5 mx-auto">
            <p className="text-xl font-bold mb-2 text-white">Your Secret Notes</p>
            <div className='flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4'>
                {diary && diary.map((item) => (
                    <div key={item.$id} className="p-4 flex flex-col items-center justify-center border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4">
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
            <TailwindToaster />
        </div>
    )
}

export default Diary