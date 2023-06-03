import { databases, storage } from '@/appwrite/appwrite';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import TailwindToaster from './TailwindToaster';
import { MdAddCircle } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { montserrat, roboto } from '@/context/fonts';

function DiaryNoteForm(userId) {
    // console.log(userId.userId);
    const [diaryTitle, setDiaryTitle] = useState("")
    const [noteItem, setNoteItem] = useState("")
    const [noteImage, setNoteImage] = useState(null)
    const [showModalForm, setShowModalForm] = useState(false);

    const openModalForm = () => {
        setShowModalForm(true);
    };

    const closeModalForm = () => {
        setShowModalForm(false);
    };

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_DIARY_COLLECTION_ID
    const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setNoteImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        // Upload the image to the bucket
        const uploadPromise = storage.createFile(bucketId, uuidv4(), noteImage);

        // Create the document with the text data and the file ID returned from the upload
        uploadPromise.then((result) => {
            const fileId = result.$id;
            const data = { diarytitle: diaryTitle, diarynote: noteItem, image: fileId, created_by: userId.userId };
            console.log(data);

            const promise = databases.createDocument(
                databaseId,
                collectionId,
                uuidv4(),
                data,
            )

            console.log(promise);
            promise.then(
                function (response) {
                    toast.success("New note added succesfully!!")
                    console.log(response);
                    window.location.reload()
                },
                function (error) {
                    toast.error(error.message)
                    console.log(error);
                    // window.location.reload()
                },
            );
        }).catch((error) => {
            toast.error(error.message)
            console.log(error);
        });

        e.target.reset()
    }


    return (
        <div className={` max-w-7xl mx-auto container lg:px-8 px-5 mt-10 text-white`}>
            <div className="flex flex-col gap-4 my-5 justify-center items-center">
                <h2 className="text-4xl font-bold">Diary Notes</h2>
                <p className="text-xl font-medium">Effortlessly capture and organize your thoughts, ideas, and plans with Promanger's Diary Note Keeping feature.</p>
                <button className="bg-rose-600 font-medium px-4 py-2 lg:w-1/6 w-full flex flex-row gap-2 justify-center items-center" onClick={openModalForm}>
                    Add New Note <MdAddCircle className="text-xl font-bold" />
                </button>
            </div>
            {showModalForm &&
                <div className='fixed inset-0 z-50 bg-opacity-50 flex flex-col justify-center items-center'>
                    <div className='bg-white rounded-lg p-6 text-pink-600'>
                        <div className='flex flex-row justify-between mb-4 items-center gap-5'>
                            <h2 className={`${montserrat.className} text-xl font-bold`}>Add Note</h2>
                            <RxCross2 className="text-xl font-bold relative top-0 right-0 hover:text-pink-600 hover:scale-150 text-gray-900 cursor-pointer w-6 h-6" onClick={closeModalForm} />
                        </div>
                        <form
                            action=""
                            onSubmit={handleSubmit}
                            className="flex flex-col justify-center gap-3 mb-10"
                        >
                            <div className='flex flex-col gap-3'>
                                <label className='text-xl font-semibold'>Note Title:</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Funny Weather"
                                    className="border p-2 rounded-md text-black placeholder-gray-600"
                                    onChange={(e) => {
                                        setDiaryTitle(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='flex flex-col gap-1 text-xl font-semibold'>Note Details:
                                    <span className='text-base text-gray-500'>*Character limit is 2000.</span>
                                </label>
                                <textarea name="note" id="note" cols="30" rows="5" placeholder="Now is the winter of our discontent. Made glorious summer by this sun of York...." className="border p-2 rounded-md text-black placeholder-gray-600"
                                    onChange={(e) => {
                                        setNoteItem(e.target.value)
                                    }}>
                                </textarea>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='flex flex-col gap-1 text-xl font-semibold'>Image Cover:
                                    <span className='text-base text-gray-500'>*Files with extensions *.jpg,*.jpeg,*.png,*.svg and *.gif are supported.</span>
                                </label>
                                <input type="file" id="imageFile" accept="image/*" onChange={handleImageUpload} />
                            </div>
                            <button
                                className="bg-pink-600 hover:bg-pink-700 p-2 lg:w-1/6 w-full text-white rounded-md"
                                type="submit"
                            >
                                Add Note
                            </button>
                        </form>
                    </div>
                </div>
            }
            <TailwindToaster />
        </div>
    )
}

export default DiaryNoteForm