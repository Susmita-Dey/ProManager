import { account } from '@/appwrite/appwrite'
import { UserContext } from '@/context/ContextProvider'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import React from 'react';

function NavLink({ to, children }) {
    return <Link href={to} className={`mx-4 py-2 hover:underline hover:underline-offset-4`}>
        {children}
    </Link>
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-gray-950 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-gray-950 h-20">
                <Link className="text-xl font-semibold" href="/">PROMANAGER</Link>
            </div>
            < div className="flex flex-col ml-4 justify-center items-center " >
                <Link className="text-xl font-medium my-4" href="/" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Home
                </Link>
                <Link className="text-xl font-normal my-4" href="/#about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </Link>
                <Link className="text-xl font-normal my-4" href="/#use-case" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Use Case
                </Link>
                <Link className="text-xl font-normal my-4" href="/#services" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Services
                </Link>
                <Link className="text-xl font-normal my-4" href="/#newsletter" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Newsletter
                </Link>
                <Link className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </Link>
                <Link className="text-xl font-medium my-4 w-full text-center py-2 rounded-md bg-pink-600 hover:bg-pink-700" href="/signup" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Sign Up
                </Link>
            </ div>
        </div >
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)

    // const { user, setUser } = useContext(UserContext)
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
    const [navbar, setNavbar] = useState(false);
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
        <nav className="flex filter drop-shadow-md bg-gray-950 px-24 h-20 items-center border-b-2 border-gray-400">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <Link className="text-2xl font-semibold" href="/">PROMANAGER</Link>
            </div>
            <div className="w-9/12 md:ml-0 ml-44 flex justify-end items-end left-0">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-evenly items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-pink-700 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-1" : ""}`} />
                    <span className={`h-1 w-full bg-pink-700 rounded-lg transition-all duration-300 ease-in-out ${open ? "hidden" : "w-full"}`} />
                    <span className={`h-1 w-full bg-pink-700 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/#about">
                        About
                    </NavLink>
                    <NavLink to="/#use-case">
                        Use Case
                    </NavLink>
                    <NavLink to="/">
                        Services
                    </NavLink>
                    <NavLink to="/#newsletter">
                        Newsletter
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    {userDetails ? (
                        // <Link href={"/"}>
                        <button onClick={handleSignOut} className='px-4 py-2 rounded-md font-medium bg-pink-600 hover:bg-pink-700'>
                            Logout
                        </button>
                        // </Link>
                    ) : (
                        <Link href="/signup">
                            <button className='px-4 py-2 rounded-md font-medium bg-pink-600 hover:bg-pink-700'>
                                Sign Up
                            </button>
                        </Link>
                    )
                    }
                </div>
            </div>
        </nav>
    )
}