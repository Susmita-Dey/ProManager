import { montserrat } from "@/context/fonts";
import React, { useContext, useEffect, useState } from "react";
import FlatCard from "./FlatCard";
import ProductivityPercentage from "./ProductivityPercentage";
import QuoteGen from "./QuoteGen";

function DashboardComponent({ username, userId }) {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let currentDate = `${day}/${month}/${year}`;
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
    wishUser =
      "Hey, waking up late night is not good for your health. Kindly go to sleep. Good night 😴";
  }

  const showFirstName = (username) => {
    let nameSplit = username.split(" ");
    return nameSplit[0];
  };

  return (
    <section className="min-h-full flex flex-col px-5 py-12 sm:px-6 lg:px-8">
      <div>
        <div className="flex flex-col lg:flex-row justify-between md:px-20 items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2
              className={`${montserrat.className} flex flex-row font-bold text-3xl md:text-6xl text-white`}
            >
              Hello{" "}
              <span className="ml-4 text-pink-600">
                {showFirstName(username)}
              </span>
              <span className="lg:animate-waving-hand overflow-hidden text-3xl md:text-6xl">
                👋
              </span>
            </h2>
            <p className="font-normal text-lg md:text-xl text-white">
              {wishUser}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-row gap-3">
              <h2
                className={`${montserrat.className} font-bold text-base md:text-xl text-white`}
              >
                Date: {currentDate}
              </h2>
              <p className="font-bold text-base md:text-xl text-white">
                Time: {currentTime}
              </p>
            </div>
            <ProductivityPercentage userId={userId} />
          </div>
        </div>
        <h2
          className={`${montserrat.className} text-2xl lg:text-start text-center font-bold lg:mt-24 mt-10 px-5 md:px-20 mb-8`}
        >
          Explore
        </h2>
        <div className="flex flex-col justify-center gap-5 items-center mb-10 px-5">
          <div className="flex flex-row justify-center items-center gap-8 flex-wrap">
            <FlatCard
              path="/productivity-tips"
              title="Productivity Tips 💁‍♀️"
              subtitle="Let's increase your productivity with some useful tips and tricks."
            />
            <FlatCard
              path="/tasklist"
              title="Tasklist 📃"
              subtitle="Let's help you in listing out your left-over tasks of the day."
            />
            <FlatCard
              path="/kanbanproject"
              title="Kanban Board 🛹"
              subtitle="Let's increase your productivity by organizing things in a cool board."
            />
            <FlatCard
              path="/idealist"
              title="Idealist 💡"
              subtitle="Let's help you with some cool project ideas. If you're smarter, add some cool ones."
            />
            <FlatCard
              path="/progress"
              title="Progress Tracker 🏃"
              subtitle="Track your daily progress by documenting your daily moves and achievements."
            />
            <FlatCard
              path="/diarynote"
              title="Your Secret Diary 📔"
              subtitle="Make notes and keep it in one place or make the habit of writing your productivity diary."
            />
            <FlatCard
              path="/stopwatch"
              title="Tick Tock ⏱️"
              subtitle="Let's increase your productivity with some useful tips and tricks."
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 mb-4">
          <h2 className={`${montserrat.className} text-2xl font-bold`}>
            Quote of the Time
          </h2>
          <QuoteGen />
        </div>
        {/* <PageSnapshot /> */}
      </div>
    </section>
  );
}

export default DashboardComponent;
