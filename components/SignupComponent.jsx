import React, { useState } from 'react'
import { account } from '@/appwrite/appwrite'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Link from 'next/link'
import toast from 'react-hot-toast'
import TailwindToaster from './TailwindToaster'

function SignupComponent() {
    const router = useRouter()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    // Signup users 
    const signupUser = async (e) => {
        e.preventDefault();
        const promise = account.create(
            uuidv4(),
            user.email,
            user.password,
            user.name
        )

        promise.then(
            function (response) {
                console.log(response);
                toast.success("Succesfully signed up!");
                router.push("/") //success
                // window.location.reload()
            },
            function (error) {
                console.log(error); //failure
                toast.error(error.message);
            }
        )

        // if (promise.success) {
        //     console.log("Succesfully signed up!")
        //     toast.success("Succesfully signed up!");
        // } else {
        //     console.log("Error", promise.error)
        //     throw new Error(promise?.error || 'Something went wrong, please try again later');
        // }
    }

    return (
        <section className="text-gray-900 min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            <div className="text-center text-2xl font-bold text-white">Sign up</div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium"
                            >
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    placeholder='John Doe'
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            name: e.target.value
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    placeholder='example@gmail.com'
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            email: e.target.value
                                        })
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium"
                            >
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    placeholder='abc@123#'
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            password: e.target.value
                                        })
                                    }}
                                />
                            </div>
                            <span className='text-sm font-medium text-pink-950 mt-1'>* Password must be atleast 8 characters long</span>
                        </div>



                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 text-white"
                                onClick={signupUser}
                            >
                                Create account
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-sm">
                                <Link
                                    href="/login"
                                    className="font-medium text-pink-600 hover:text-pink-800 hover:underline hover:underline-offset-4"
                                >
                                    Already have an account, Log In
                                </Link>
                            </div>
                        </div>

                    </form>

                    {/* <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
                <TailwindToaster />
            </div>
        </section>
    )
}

export default SignupComponent