import { account } from '@/appwrite/appwrite';
import NotLoggedIn from '@/components/NotLoggedIn';
import { montserrat } from '@/context/fonts';
import useTimer from '@/context/useTimer';
import { formatTime } from '@/utils';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';

export default function Stopwatch() {
    const { timer, isActive, isPaused, pomodoroTime, pomodoroCount, isPomodoroActive, isPomodoroPaused, handleStart, handlePause, handleResume, handleReset, handlePomodoroInputChange, handlePomodoroPause, handlePomodoroReset, handlePomodoroStart, handlePomodoroResume } = useTimer(0);

    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        const getData = account.get();
        getData.then(
            function (response) {
                setUserDetails(response);
                // toast.success("Let's track your daily progress!!");
                console.log(userDetails);
            },
            function (error) {
                toast.error(error.message);
                console.log(error);
            }
        );
    }, []);

    return (
        <>
            <Head>
                <title>ProManager | Track Time</title>
                <meta name="description" content="ProManager - Organize tasks with KanbanBoard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {userDetails ? (
                <section className="container mx-auto px-5">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="flex flex-col gap-4 my-5 justify-center items-center">
                            <h2 className={`${montserrat.className} text-4xl font-bold`}>Time Mastery Made Simple</h2>
                            <p className="text-xl font-medium">Unleash Your Productivity with the Stopwatch Feature in ProManager</p>
                        </div>
                        <h3 className="text-lg">Tick Tock ⏱️</h3>
                        <div className="flex flex-col gap-2 stopwatch-card justify-center items-center">
                            {isPomodoroActive ? (
                                <p className="text-3xl font-bold">{formatTime(pomodoroTime)}</p>
                            ) : (
                                <p className="text-3xl font-bold">{formatTime(timer)}</p>
                            )}
                            <div className="flex flex-col md:flex-row gap-2">
                                {isPomodoroActive ? (
                                    <>
                                        {!isPomodoroActive && !isPomodoroPaused ? (
                                            <button onClick={handlePomodoroStart}>Start Pomodoro</button>
                                        ) : (
                                            isPomodoroPaused ? (
                                                <button onClick={handlePomodoroPause}>Pause Pomodoro</button>
                                            ) : (
                                                <button onClick={handlePomodoroResume}>Resume Pomodoro</button>
                                            )
                                        )
                                        }
                                        <button onClick={handlePomodoroReset}>Reset Pomodoro</button>
                                    </>
                                ) : (
                                    <>
                                        {!isActive && !isPaused ? (
                                            <button onClick={handleStart}>Start</button>
                                        ) : (
                                            isPaused ? (
                                                <button onClick={handlePause}>Pause</button>
                                            ) : (
                                                <button onClick={handleResume}>Resume</button>
                                            )
                                        )}
                                        <button onClick={handleReset} disabled={!isActive}>Reset</button>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 stopwatch-card justify-center items-center">
                            <h3>Pomodoro Technique</h3>
                            <div className="flex flex-col md:flex-row gap-2">
                                <input type="number" value={pomodoroTime} onChange={handlePomodoroInputChange} />
                                {/* {!isPomodoroActive ? (
                                    <button onClick={handlePomodoroStart}>Start Pomodoro</button>
                                ) : (
                                    <button onClick={handlePomodoroPause}>Pause Pomodoro</button>
                                )} */}
                                {!isPomodoroActive && (
                                    <button onClick={handlePomodoroStart}>Start Pomodoro</button>
                                )}
                                {/* <button onClick={handlePomodoroReset}>Reset Pomodoro</button> */}
                            </div>
                            <p>Completed Pomodoros: {pomodoroCount}</p>
                        </div>
                    </div>
                </section>
            ) : (
                <NotLoggedIn />
            )
            }
        </>
    );
}
