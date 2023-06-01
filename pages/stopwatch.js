import { account } from '@/appwrite/appwrite';
import NotLoggedIn from '@/components/NotLoggedIn';
import useTimer from '@/context/useTimer';
import { formatTime } from '@/utils';
import React, { useEffect, useRef, useState } from 'react'

export default function Stopwatch() {
    const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
                toast.success("Let's track your daily progress!!")
                console.log(userDetails);
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
            }
        )
    })

    return (
        <>
            {userDetails ? (
                <section className=' container mx-auto px-5'>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h3 className='text-3xl'>Tick Tock ⏱️</h3>
                        <div className='flex flex-col gap-2 stopwatch-card justify-center items-center'>
                            <p className='text-3xl font-bold'>{formatTime(timer)}</p> {/* here we will show timer */}
                            <div className='flex flex-col md:flex-row gap-2'>
                                {
                                    !isActive && !isPaused ?
                                        <button onClick={handleStart}>Start</button>
                                        : (
                                            isPaused ? <button onClick={handlePause}>Pause</button> :
                                                <button onClick={handleResume}>Resume</button>
                                        )
                                }
                                <button onClick={handleReset} disabled={!isActive}>Reset</button>
                            </div>
                        </div>
                    </div>
                </section>) : (
                <NotLoggedIn />
            )
            }
        </>
    );
}
