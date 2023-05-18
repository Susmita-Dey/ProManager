import TodoForm from '@/components/TodoForm'
import Todos from '@/components/Todos'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { account } from './api/appwrite'


function TaskList() {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
                console.log(userDetails);
            },
            function (error) {
                console.log(error);
            }
        )
    }, [])

    return (
        <>
            {userDetails ? (
                <>
                    <div>
                        <TodoForm />
                        <Todos />
                    </div>
                </>
            ) : (
                <p className="mt-4">
                    Please Login To see Profile{" "}
                    <Link href="/login">
                        <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
                            Login
                        </span>
                    </Link>
                </p>
            )}
        </>
    )
}

export default TaskList