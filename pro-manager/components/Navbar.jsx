import Link from 'next/link'
import { useState } from 'react'

function NavLink({ to, children }) {
    return <Link href={to} className={`mx-4`}>
        {children}
    </Link>
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-gray-950 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            {/* <div className="flex items-center justify-center filter drop-shadow-md bg-gray-950 h-20">
                <Link className="text-xl font-semibold" href="/">PROMANAGER</Link>
            </div> */}
            < div className="flex flex-col ml-4" >
                <Link className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </Link>
                <Link className="text-xl font-normal my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </Link>
                <Link className="text-xl font-normal my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </Link>
                <Link className="text-xl font-normal my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </Link>
                <Link className="text-xl font-normal my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </Link>
                <Link className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </Link>
            </ div>
        </div >
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-gray-950 px-24 h-24 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <Link className="text-2xl font-semibold" href="/">PROMANAGER</Link>
            </div>
            <div className="w-9/12 flex justify-end items-end right-0">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-pink-700 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-pink-700 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-pink-700 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/#about">
                        About
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
                    <NavLink to="/signup">
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}