import Link from 'next/link'
import React from 'react'

export default function NotLoggedIn() {
    return (
        <div className="flex flex-col text-center text-5xl font-bold gap-4">
            {/* <Image src="https://media.tenor.com/cvaLc_ivxJoAAAAC/facepalm-oh-no.gif" alt="oh-no-gif" width={0} height={0} className='h-full w-full'/> */}
            <p> Please Login To see Profile</p>
            <Link href="/login">
                <span className="bg-pink-600 text-2xl px-4 py-2 cursor-pointer text-white rounded-md">
                    Login
                </span>
            </Link>
        </div>
    )
}
