import React, { useEffect, useState } from 'react'
import { databases, storage } from '@/appwrite/appwrite'
import { Query } from 'appwrite'
import toast from 'react-hot-toast'
import TailwindToaster from './TailwindToaster'
import Image from 'next/image'
import DiaryCard from './DiaryCard'
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import Loader from './Loader'
import EditDiaryModal from './EditDiaryModal'

function Diary(userId) {
    const [diary, setDiary] = useState([])
    const [loader, setLoader] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_DIARY_COLLECTION_ID

    // console.log(userId.userId);
    useEffect(() => {
        setLoader(true)
        const getDiary = databases.listDocuments(databaseId, collectionId, [
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
        const promise = databases.deleteDocument(databaseId, collectionId, id)
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
            {/* <div className='flex items-center'>
                <div
                    className="w-16 h-16 flex items-center justify-center border-dotted border-2 border-gray-400 rounded-full cursor-pointer"
                    onClick={handleOpenModal}
                >
                    <span className="text-4xl font-bold">+</span>
                </div>
                <p className="ml-4 text-white">Click to add new item</p>
            </div> */}
            <div className='flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4'>
                {diary && diary.map((item) => (
                    <div key={item.$id} className="p-4 flex flex-col items-center justify-center border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4">
                        <button
                            className="absolute top-2 right-2 flex text-white font-medium p-2 text-center border border-red-500 hover:bg-rose-900 rounded-md"
                            onClick={() => {
                                deleteNote(item.$id)
                            }}
                        >
                            <MdDeleteForever className='text-2xl' />
                        </button>
                        <DiaryCard key={item.$id} imageFileId={item.image} diaryTitle={item.diarytitle} diaryNote={item.diarynote} />
                        {/* <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                            <button
                                className="flex flex-row gap-2 text-white font-medium px-16 py-2 text-center border border-pink-900 bg-pink-900 rounded-md"
                                onClick={handleOpenModal}
                            >
                                <MdEdit className='text-2xl' /> Edit
                            </button>
                            <button
                                className="flex flex-row gap-2 text-white font-medium px-[3.2rem] py-2 text-center border border-red-500 hover:bg-rose-900 rounded-md"
                                onClick={() => {
                                    deleteNote(item.$id)
                                }}
                            >
                                Delete <MdDeleteForever className='text-2xl' />
                            </button>
                        </div> */}
                        {/* <div>
                            {isModalOpen && (
                                <EditDiaryModal documentId={item.$id} closeModalForm={handleCloseModal} />
                            )}
                        </div> */}
                    </div>
                ))
                }

            </div>
            <TailwindToaster />
        </div >
    )
}

export default Diary