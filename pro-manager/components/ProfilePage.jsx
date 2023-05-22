import { account, users } from '@/appwrite/appwrite';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { MdDeleteForever, MdEmail, MdLocationPin } from 'react-icons/md';

function ProfilePage() {
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

    const deleteUser = () => {
        const promise = account.delete();
        promise.then(
            function (response) {
                setUserDetails(response)
                console.log(response);
                router.push("/")
            },
            function (error) {
                console.log(error);
                window.location.reload()
            }
        )
    }
    return (
        userDetails &&
        <section className="relative py-16 bg-gray-300">
            <div className="container mx-auto px-8">
                <div className="relative flex flex-col justify-center min-w-0 break-words bg-pink-100 w-full mb-4 shadow-xl rounded-lg -mt-96 lg:-mt-64 md:-mt-64">
                    <div className="px-4">
                        <div className="w-full px-8 flex justify-center text-center rounded-full">
                            <div className="px-4 mb-10">
                                {/* <div className="font-bold text-gray-700 rounded-full bg-pink-500 flex items-center justify-center font-mono" style={{ height: "500px", width: "500px", fontSize: "170px" }}> */}
                                <h2 className="shadow-xl rounded-full h-auto text-center align-middle border-none  -m-16  text-6xl bg-pink-600 p-12" style={{ height: "10rem", width: "10rem" }}>{userDetails?.name.substring(0, 1)}</h2>
                                {/* </div> */}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center text-center mt-12">
                            <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                                {userDetails?.name}
                            </h3>
                            <div className="flex flex-row">
                                <span className="flex text-lg leading-normal mt-0 mb-2 text-gray-900 font-bold">
                                    <MdEmail className="mr-2 mt-1 text-lg text-gray-900" />{" "}
                                    {userDetails?.email}
                                </span>
                            </div>
                            <div className="flex flex-row">
                                <span className="flex text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                    <MdLocationPin className="mr-2 text-lg text-gray-500" />{" "}
                                    Los Angeles, California
                                </span>
                            </div>
                            <div className="mb-2 text-gray-700 mt-10">
                                <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                                Account Registration: <code>{userDetails?.registration}</code>
                            </div>
                            <div className="mb-2 text-gray-700">
                                <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                                University of Computer Science
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-gray-300 text-center">
                            <div className="flex flex-col flex-wrap justify-center items-center">
                                <button className='flex flex-row gap-1 px-4 py-2 bg-red-600 hover:bg-red-800 text-white' onClick={deleteUser}>
                                    <MdDeleteForever className='text-lg mt-1' /> Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfilePage