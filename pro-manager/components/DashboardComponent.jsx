import Link from 'next/link';
import React, { useContext } from 'react'
import QuoteGen from './QuoteGen';

function DashboardComponent({ username }) {
    const date = new Date()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours()
    let minutes = date.getMinutes()

    let currentDate = `${day}-${month}-${year}`;
    let currentTime = `${hours}:${minutes}`;

    if (hours < 10 && minutes < 10) {
        currentTime = `0${hours}:0${minutes}`;
    } else if (hours < 10 && minutes >= 10) {
        currentTime = `0${hours}:${minutes}`;
    } else if (hours >= 10 && minutes < 10) {
        currentTime = `${hours}:0${minutes}`;
    }

    let wishUser = "Good morning 🌞";
    if (hours >= 12 && hours < 16) {
        wishUser = "Good afternoon 🕑";
    } else if (hours >= 16 && hours <= 23) {
        wishUser = "Good evening 🌆";
    } else if (hours >= 0 && hours <= 5) {
        wishUser = "Hey, waking up late night is not good for your health. Kindly go to sleep. Good night 😴";
    }

    const showFirstName = (username) => {
        let nameSplit = username.split(" ");
        return nameSplit[0]
    }

    return (
        <section className="min-h-full flex flex-col px-5 py-12 sm:px-6 lg:px-8">
            <div className='flex flex-row justify-evenly items-center gap-5'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-2xl md:text-6xl text-white'>Hello {showFirstName(username)}
                        <span className='inset-0 animate-bounce text-2xl md:text-6xl'>👋</span>
                    </h2>
                    <p className='font-normal text-base md:text-xl text-white'>{wishUser}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-base md:text-xl text-white'>Date: {currentDate}</h2>
                    <p className='font-bold text-base md:text-xl text-white'>Time: {currentTime}</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-10'>
                <h2 className='text-2xl text-center my-10'>What do you wanna explore today?</h2>
                <div className='flex flex-row justify-center items-center gap-5 flex-wrap'>
                    <Link href={'/'}>
                        <div className='flex flex-col border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-2'>
                            <p className='text-xl hover:underline hover:underline-offset-4'>Productivity Tips</p>
                            <p className='text-base'>Productivity Tips</p>
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div className='flex flex-col border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-2'>
                            <p className='text-xl hover:underline hover:underline-offset-4'>Kanban</p>
                            <p className='text-base'>Kanban</p>
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div className='flex flex-col border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-2'>
                            <p className='text-xl hover:underline hover:underline-offset-4'>Todo</p>
                            <p className='text-base'>Todo</p>
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div className='flex flex-col border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-2'>
                            <p className='text-xl hover:underline hover:underline-offset-4'>Productivity Tips</p>
                            <p className='text-base'>Productivity Tips</p>
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div className='flex flex-col border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-2'>
                            <p className='text-xl hover:underline hover:underline-offset-4'>Timer</p>
                            <p className='text-base'>Timer</p>
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div className='flex flex-col border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-2'>
                            <p className='text-xl hover:underline hover:underline-offset-4'>Productivity Tips</p>
                            <p className='text-base'>Productivity Tips</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-10'>
                <h2 className='text-2xl font-bold'>Quote of the Time</h2>
                <QuoteGen />
            </div>
        </section>
    )
}

export default DashboardComponent