import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { databases } from '@/pages/api/appwrite'

function TodoForm() {
    const [todoItem, setTodoItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument("6466055dd831efd150ef", uuidv4(), {
            todo: todoItem
        })

        console.log(promise);
        promise.then(
            function (response) {
                console.log(response);
                window.location.reload()
            },
            function (error) {
                console.log(error);
                window.location.reload()
            },
        );
        // e.target.reset()
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
        </div>
    )
}

export default TodoForm