import { useState, useRef, useEffect } from 'react';

const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [pomodoroTime, setPomodoroTime] = useState(25); // Default Pomodoro time is 25 minutes
    const [isPomodoroActive, setIsPomodoroActive] = useState(false);
    const [isPomodoroPaused, setIsPomodoroPaused] = useState(false);
    const [pomodoroCount, setPomodoroCount] = useState(0);

    const pomodoroTimerRef = useRef(null);

    const countRef = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
    }

    const handleResume = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    const handlePomodoroStart = () => {
        setIsPomodoroActive(true);
        setIsPomodoroPaused(true)
        pomodoroTimerRef.current = setInterval(() => {
            setPomodoroTime((prevTime) => prevTime - 1);
        }, 1000);
    };

    const handlePomodoroResume = () => {
        setIsPomodoroPaused(true)
        pomodoroTimerRef.current = setInterval(() => {
            setPomodoroTime((prevTime) => prevTime - 1);
        }, 1000);
    };

    const handlePomodoroPause = () => {
        setIsPomodoroPaused(false);
        clearInterval(pomodoroTimerRef.current);
    };

    const handlePomodoroReset = () => {
        setIsPomodoroActive(false);
        setIsPomodoroPaused(false)
        clearInterval(pomodoroTimerRef.current);
        setPomodoroTime(25);
    };

    useEffect(() => {
        if (pomodoroTime === 0) {
            clearInterval(pomodoroTimerRef.current);
            setIsPomodoroActive(false);
            setIsPomodoroPaused(false)
            setPomodoroCount((prevCount) => prevCount + 1);
            setPomodoroTime(25);
        }
    }, [pomodoroTime]);

    const handlePomodoroInputChange = (event) => {
        const time = parseInt(event.target.value, 10);
        setPomodoroTime(time);
    };

    return { timer, isActive, isPaused, pomodoroTime, pomodoroCount, isPomodoroActive, isPomodoroPaused, handleStart, handlePause, handleResume, handleReset, handlePomodoroInputChange, handlePomodoroPause, handlePomodoroReset, handlePomodoroStart, handlePomodoroResume }
}

export default useTimer