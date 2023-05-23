import React, { useRef, useState } from 'react'

export default function Stopwatch() {
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const handleStart = () => {
        // start button logic here
    }

    const handlePause = () => {
        // Pause button logic here
    }

    const handleResume = () => {
        // Resume button logic here
    }

    const handleReset = () => {
        // Reset button logic here
    }

    return (
        <section className=' container mx-auto px-5'>
            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className='text-3xl'>Tick Tock ⏱️</h3>
                <div className='flex flex-col gap-2 stopwatch-card justify-center items-center'>
                    <p className='text-3xl font-bold'>{timer}</p> {/* here we will show timer */}
                    <div className='flex flex-col md:flex-row gap-2'>
                        <button onClick={handleStart}>Start</button>
                        <button onClick={handlePause}>Pause</button>
                        <button onClick={handleResume}>Resume</button>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
