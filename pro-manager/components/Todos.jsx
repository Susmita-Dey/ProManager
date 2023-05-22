import React, { useEffect, useState } from 'react'
import { databases } from '@/appwrite/appwrites'

function Todos() {
    const [todos, setTodos] = useState()
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        const getTodos = databases.listDocuments("646605464de2f5cb7435", "6466055dd831efd150ef")
        getTodos.then(
            function (response) {
                setTodos(response.documents)
                console.log(response.documents);
            },
            function (error) {
                console.log(error);
            }
        )
        setLoader(false)
    }, [])

    const deleteTodo = (id) => {
        const promise = databases.deleteDocument("646605464de2f5cb7435", "6466055dd831efd150ef", id)
        promise.then(
            function (response) {
                console.log(response);
                window.location.reload()
            },
            function (error) {
                console.log(error);
                window.location.reload()
            }
        )
    }

    return (
        <div className="max-w-7xl mx-auto text-white">
            <p className="text-xl font-bold mb-2">Todo List</p>
            {loader ? (
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-800 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div>
                    {todos && todos.map(item => (
                        <div key={item.$id} >
                            <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 text-black rounded-lg mb-1">
                                <div>
                                    <p>{item.todo}</p>
                                </div>
                                <div>
                                    <span
                                        className="text-red-400 cursor-pointer"
                                        onClick={() => {
                                            deleteTodo(item.$id)
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
            )}
        </div>
    )
}

export default Todos