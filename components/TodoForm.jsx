import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { databases } from '@/appwrite/appwrite'
import toast from 'react-hot-toast';
import TailwindToaster from './TailwindToaster';

function TodoForm(userId) {
    // console.log(userId.userId);
    const [todoItem, setTodoItem] = useState("")
    const data = { todoitem: todoItem, created_by: userId.userId };
    console.log(data);

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_TASKLIST_COLLECTION_ID

    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument(
            databaseId,
            collectionId,
            uuidv4(),
            data,
        )

        console.log(promise);
        promise.then(
            function (response) {
                console.log(response);
                toast.success("Successfully added new task!!")
                window.location.reload()
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
                className="flex justify-center mb-10"
            >
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Todo"
                    className="border p-2 w-2/3 rounded-md text-black placeholder-gray-600"
                    onChange={(e) => {
                        setTodoItem(e.target.value)
                    }}
                />
                <button
                    className="bg-pink-600 hover:bg-pink-700 p-2 text-white ml-2 rounded-md"
                    type="submit"
                >
                    Add Todo
                </button>
            </form>
            <TailwindToaster />
        </div>
    )
}

export default TodoForm