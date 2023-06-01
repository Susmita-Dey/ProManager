import { databases, storage } from '@/appwrite/appwrite';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import TailwindToaster from './TailwindToaster';

function AddKanbanItemForm(userId) {
    // console.log(userId.userId.userId);
    const [boardTitle, setBoardTitle] = useState("")
    const [boardItem, setBoardItem] = useState("")
    const [boardImage, setBoardImage] = useState(null)

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setBoardImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        // Upload the image to the bucket
        const uploadPromise = storage.createFile("64660501997e9ab009e4", uuidv4(), boardImage);

        // Create the document with the text data and the file ID returned from the upload
        uploadPromise.then((result) => {
            const fileId = result.$id;
            const data = { boardtitle: boardTitle, boarditem: boardItem, status: "todo", image: fileId, created_by: userId.userId.userId };
            console.log(data);

            const promise = databases.createDocument(
                "646605464de2f5cb7435",
                "6466067e1863a7ff50de",
                uuidv4(),
                data,
            )

            console.log(promise);
            promise.then(
                function (response) {
                    toast.success("New item added succesfully!!")
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
        <div className="max-w-7xl mx-auto container lg:px-8 px-5 mt-10 text-white">
            <form
                action=""
                onSubmit={handleSubmit}
                className="flex flex-col justify-center gap-3 mb-10"
            >
                <div className='flex flex-col gap-3'>
                    <label className='text-xl font-semibold'>Kanban Title:</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Funny Weather"
                        className="border p-2 rounded-md text-black placeholder-gray-600"
                        onChange={(e) => {
                            setBoardTitle(e.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='flex flex-col gap-1 text-xl font-semibold'>Kanban Details:
                        <span className='text-base text-gray-500'>*Character limit is 600.</span>
                    </label>
                    <input name="kanban" id="kanban" cols="30" rows="5" placeholder="Now is the winter of our discontent. Made glorious summer by this sun of York...." className="border p-2 rounded-md text-black placeholder-gray-600"
                        onChange={(e) => {
                            setBoardItem(e.target.value)
                        }} />
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
                    Add kanban
                </button>
            </form>
            <TailwindToaster />
        </div>
    )
}

export default AddKanbanItemForm