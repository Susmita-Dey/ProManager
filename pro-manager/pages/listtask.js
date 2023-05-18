import React, { useEffect, useState } from 'react'
import { databases } from './api/appwrite'

function ListTask() {
    const [todos, setTodos] = useState()
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        const getTodos = databases.listDocuments("6466055dd831efd150ef")
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
        const promise = databases.deleteDocument("6466055dd831efd150ef", id)
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
        <div className="max-w-7xl mx-auto">
            <p className="text-xl font-bold mb-2">Todo List</p>
            {loader ? (
                <p>Loading ...</p>
            ) : (
                <div>
                    {todos && todos.map(item => (
                        <div key={item.$id} >
                            <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
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

export default ListTask