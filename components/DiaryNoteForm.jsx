import { databases } from '@/appwrite/appwrite';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import TailwindToaster from './TailwindToaster';

function DiaryNoteForm(userId) {
    // console.log(userId.userId);
    const [diaryTitle, setDiaryTitle] = useState("")
    const [noteItem, setNoteItem] = useState("")
    const [noteImage, setNoteImage] = useState("https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_1280.jpg")
    const data = { diarytitle: diaryTitle, diarynote: noteItem, image: noteImage, created_by: userId.userId };
    console.log(data);


    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument(
            "646605464de2f5cb7435",
            "64660b181c0af1741d29",
            uuidv4(),
            data,
        )

        console.log(promise);
        promise.then(
            function (response) {
                toast.success("New note added succesfully!!")
                console.log(response);
                // window.location.reload()
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
                // window.location.reload()
            },
        );
        e.target.reset()
    }


    return (
        <div className="max-w-7xl mx-auto mt-10 text-white">
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
                    <label className='text-xl font-semibold'>Image Cover:</label>
                    <input type={'file'} name="image" id="image" placeholder="Upload Image"
                        onChange={(e) => {
                            setNoteImage(e.target.files[0])
                        }}>
                    </input>
                </div>
                <button
                    className="bg-pink-600 hover:bg-pink-700 p-2 w-1/6 text-white rounded-md"
                    type="submit"
                >
                    Add Note
                </button>
            </form>
            <TailwindToaster />
        </div>
    )
}

export default DiaryNoteForm