import Link from 'next/link'
import React from 'react'

function FlatCard({ title, subtitle, path = '/' }) {
    return (
        <Link href={path}>
            <div className='flex flex-col w-full md:w-1/2 flex-wrap border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-2 hover:shadow-lg hover:shadow-pink-500/40'>
                <p className='text-xl hover:underline hover:underline-offset-4 font-semibold'>{title}</p>
                <p className='text-base w-full md:w-96'>{subtitle}</p>
            </div>
        </Link>
    )
}

export default FlatCard