import { account, databases, functions } from '@/appwrite/appwrite';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react'
import React, { useEffect, useState, Fragment } from 'react'
import { MdDeleteForever, MdEmail, MdLocationPin } from 'react-icons/md';

function ProfilePage() {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState()
    const [todoCount, setTodoCount] = useState(0)

    const [isOpen, setIsOpen] = useState(true)

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

    const deleteUser = (id) => {
        console.log(id);
        if (id === undefined) {
            return;
        }
        const promise = functions.createExecution('646b801508edd4a42aba', id);
        promise.then(
            function (response) {
                setUserDetails(response);
                console.log(response);
                router.push('/');
            },
            function (error) {
                console.log(error);
                // window.location.reload();
            }
        );
    };
    const getCount = () => {
        const list = databases.listDocuments("646605464de2f5cb7435", "6466055dd831efd150ef");
        console.log(list);
        const stats = list?.total;
        console.log(stats);
        // return stats;
        setTodoCount(stats)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            {userDetails &&
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-8">
                        <div className="relative flex flex-col justify-center min-w-0 break-words bg-gray-300 w-full mb-4 shadow-xl rounded-lg -mt-96 lg:-mt-64 md:-mt-64">
                            <div className="px-4">
                                <div className="w-full px-8 flex justify-center text-center rounded-full">
                                    <div className="px-4 mb-10">
                                        {/* <div className="font-bold text-gray-700 rounded-full bg-pink-500 flex items-center justify-center font-mono" style={{ height: "500px", width: "500px", fontSize: "170px" }}> */}
                                        <h2 className="shadow-xl rounded-full h-auto text-center align-middle border-none  -m-16  text-6xl bg-pink-600 p-12" style={{ height: "10rem", width: "10rem" }}>{userDetails?.name?.substring(0, 1)}</h2>
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
                                    <div className="mb-2 text-gray-700 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                                        Account Registration: <code>{userDetails?.registration}</code>
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                    <div className="flex flex-col flex-wrap justify-center items-center">
                                        <div className='text-gray-500'>
                                            <p>No of Todo items: {todoCount}</p>
                                        </div>
                                        <button className='flex flex-row gap-1 px-4 py-2 bg-red-600 hover:bg-red-800 text-white' type="button"
                                            onClick={openModal}>
                                            Delete Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-300 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Delete Account
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure that you wanna delete your account permanently?
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button className='flex flex-row gap-1 px-4 py-2 bg-red-600 hover:bg-red-800 text-white'
                                            onClick={() => {
                                                deleteUser(userDetails.$id)
                                            }}>
                                            <MdDeleteForever className='text-lg mt-1' /> Delete Account
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ProfilePage