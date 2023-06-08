import { databases, storage } from "@/appwrite/appwrite";
import { montserrat } from "@/context/fonts";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import TailwindToaster from "./TailwindToaster";

function EditProgressModal({ selectedProgress, closeModal, closeReload }) {
  const [yesterdayItem, setYesterdayItem] = useState(
    selectedProgress?.done_yesterday
  );
  const [todayItem, setTodayItem] = useState(selectedProgress?.doing_today);
  const [achievementItem, setAchievementItem] = useState(
    selectedProgress?.achievements
  );
  const [learningItem, setLearningItem] = useState(selectedProgress?.learnings);

  // alert(selectedProgress.$id);
  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId =
    process.env.NEXT_PUBLIC_APPWRITE_PROGRESS_TRACK_COLLECTION_ID;

  const updateProgress = () => {
    if (!selectedProgress) return;

    const data = {
      done_yesterday: yesterdayItem,
      doing_today: todayItem,
      achievements: achievementItem,
      learnings: learningItem,
    };
    console.log(data);

    const promise = databases.updateDocument(
      databaseId,
      collectionId,
      selectedProgress.$id,
      data
    );
    promise.then(
      function (response) {
        toast.success("Progress updated successfully!!");
        console.log(response);
        closeReload();
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 bg-opacity-50 flex flex-col justify-center items-center">
        <div className="bg-gray-900 border-2 border-purple-500 rounded-lg p-6 lg:w-1/2 lg:h-auto w-80 h-[40rem]">
          <div className="flex flex-row justify-between mb-4 items-center gap-5">
            <h2 className={`${montserrat.className} text-xl font-bold`}>
              Add Progress
            </h2>
            <RxCross2
              className="text-xl font-bold relative top-0 right-0 hover:text-pink-600 hover:scale-150 text-gray-200 cursor-pointer w-6 h-6"
              onClick={closeModal}
            />
          </div>
          <div className="flex flex-col gap-4 justify-center mb-10">
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold">
                Add yesterday&apos;s accomplished goal
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder={selectedProgress?.done_yesterday}
                defaultValue={selectedProgress?.done_yesterday}
                className="border p-2 bg-gray-300 rounded-md text-black placeholder-gray-600"
                onChange={(e) => {
                  setYesterdayItem(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="flex flex-col gap-1 text-xl font-semibold">
                Add today&apos;s accomplished goal
                {/* <span className='text-base text-gray-500'>*Character limit is 2000.</span> */}
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder={selectedProgress?.doing_today}
                defaultValue={selectedProgress?.doing_today}
                className="border p-2 rounded-md bg-gray-300 text-black placeholder-gray-600"
                onChange={(e) => {
                  setTodayItem(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold">
                Add new achievement
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder={selectedProgress?.achievements}
                defaultValue={selectedProgress?.achievements}
                className="border p-2 bg-gray-300 rounded-md text-black placeholder-gray-600"
                onChange={(e) => {
                  setAchievementItem(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold">
                Add new challenges/learnings
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder={selectedProgress?.learnings}
                defaultValue={selectedProgress?.learnings}
                className="border p-2 bg-gray-300 rounded-md text-black placeholder-gray-600"
                onChange={(e) => {
                  setLearningItem(e.target.value);
                }}
              />
            </div>
            <button
              className="bg-pink-600 text-white hover:bg-pink-700 px-3 py-2 rounded-md"
              onClick={updateProgress}
            >
              Update Progress
            </button>
          </div>
          <TailwindToaster />
        </div>
      </div>
    </div>
  );
}

export default EditProgressModal;
