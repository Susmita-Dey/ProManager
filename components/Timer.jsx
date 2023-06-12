import React from "react";
import { montserrat } from "@/context/fonts";
import useTimer from "@/context/useTimer";
import { formatPomodoroTime } from "@/utils/formatPomodoroTime";
import { formatTime } from "@/utils/formatTime";
import TailwindToaster from "./TailwindToaster";

function Timer() {
  const {
    timer,
    isActive,
    isPaused,
    pomodoroTime,
    pomodoroCount,
    isPomodoroActive,
    isPomodoroPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    handlePomodoroInputChange,
    handlePomodoroPause,
    handlePomodoroReset,
    handlePomodoroStart,
    handlePomodoroResume,
  } = useTimer(0);

  return (
    <section className="container mx-auto px-5">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-4 my-5 justify-center items-center">
          <h2
            className={`${montserrat.className}  text-3xl lg:text-4xl font-bold`}
          >
            Time Mastery Made Simple
          </h2>
          <p className="md:text-xl font-medium">
            Unleash Your Productivity with the Stopwatch Feature in ProManager
          </p>
        </div>
        <h3 className="text-lg">Tick Tock ⏱️</h3>
        <div className="flex flex-col gap-2 stopwatch-card justify-center items-center">
          {isPomodoroActive ? (
            <p className="text-3xl font-bold">
              {formatPomodoroTime(pomodoroTime)}
            </p>
          ) : (
            <p className="text-3xl font-bold">{formatTime(timer)}</p>
          )}
          <div className="flex flex-col md:flex-row gap-2">
            {isPomodoroActive ? (
              <>
                {!isPomodoroActive && !isPomodoroPaused ? (
                  <button onClick={handlePomodoroStart}>Start Pomodoro</button>
                ) : isPomodoroPaused ? (
                  <button onClick={handlePomodoroPause}>Pause Pomodoro</button>
                ) : (
                  <button onClick={handlePomodoroResume}>
                    Resume Pomodoro
                  </button>
                )}
                <button
                  onClick={handlePomodoroReset}
                  disabled={!isPomodoroActive}
                >
                  Reset Pomodoro
                </button>
              </>
            ) : (
              <>
                {!isActive && !isPaused ? (
                  <button onClick={handleStart}>Start</button>
                ) : isPaused ? (
                  <button onClick={handlePause}>Pause</button>
                ) : (
                  <button onClick={handleResume}>Resume</button>
                )}
                <button onClick={handleReset} disabled={!isActive}>
                  Reset
                </button>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 stopwatch-card justify-center items-center mt-4">
          <h3 className="text-lg">Pomodoro Technique</h3>
          <div className="flex flex-col gap-2">
            <input
              type="number"
              value={pomodoroTime}
              onChange={handlePomodoroInputChange}
              className="bg-gray-700 rounded-md text-center text-lg flex p-1"
            />
            {!isPomodoroActive && (
              <button onClick={handlePomodoroStart}>Start Pomodoro</button>
            )}
          </div>
          <p className="font-medium italic my-2">
            Completed Pomodoros: {pomodoroCount}
          </p>
        </div>
      </div>
      <TailwindToaster />
    </section>
  );
}

export default Timer;
