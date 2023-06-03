import { account } from "@/appwrite/appwrite";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Services from "./Services";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
                // console.log(userDetails);
            },
            function (error) {
                console.log(error);
            }
        )
    })

    const router = useRouter();
    async function handleSignOut() {
        try {
            const res = await account.deleteSessions();
            setUserDetails('');
            router.push("/")
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <nav className="filter drop-shadow-md lg:px-24 h-20 px-2 border-b-2 border-gray-400 relative flex flex-wrap items-center justify-between py-3 bg-gray-950 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            href="/"
                        >
                            ProManager
                        </Link>
                        <button
                            className="text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars className="text-xl font-bold" />
                        </button>
                    </div>
                    {userDetails ? (
                        <div
                            className={
                                "lg:flex flex-grow items-center" +
                                (navbarOpen ? "flex" : " hidden")
                            }
                            id="example-navbar-danger"
                        >
                            <ul className="flex flex-col justify-center items-center bg-gray-950 lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/profile"
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Services />
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/contribute"
                                    >
                                        Contribute
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/contact"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <div className="flex flex-col bg-gray-950 lg:flex-row list-none">

                                {/* <Link href={"/"}> */}
                                <button onClick={handleSignOut} className='px-4 py-2 rounded-md font-medium bg-pink-600 hover:bg-pink-700'>
                                    Logout
                                </button>
                                {/* </Link> */}

                            </div>
                        </div>
                    ) : (
                        <div
                            className={
                                "lg:flex flex-grow items-center" +
                                (navbarOpen ? "flex" : " hidden")
                            }
                            id="example-navbar-danger"
                        >
                            <ul className="flex flex-col justify-center items-center bg-gray-950 lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/#about"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/#use-case"
                                    >
                                        Use Case
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Services />
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/#newsletter"
                                    >
                                        Newsletter
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/contribute"
                                    >
                                        Contribute
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                                        href="/contact"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <div className="flex flex-col bg-gray-950 lg:flex-row list-none">
                                <Link href="/signup">
                                    <button className='px-4 py-2 w-full rounded-md font-medium bg-pink-600 hover:bg-pink-700'>
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                    }
                </div>
            </nav>
        </>
    );
}