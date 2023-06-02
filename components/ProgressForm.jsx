import { databases } from '@/appwrite/appwrite'
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import TailwindToaster from './TailwindToaster'

function ProgressForm(userId) {
    console.log(userId);
    const [yesterdayItem, setYesterdayItem] = useState("")
    const [todayItem, setTodayItem] = useState("")
    const [achievementItem, setAchievementItem] = useState("")
    const [learningItem, setLearningItem] = useState("")

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PROGRESS_TRACK_COLLECTION_ID;

    const data = { done_yesterday: yesterdayItem, doing_today: todayItem, achievements: achievementItem, learnings: learningItem, created_by: userId.userId };
    console.log(data);

    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument(
            databaseId,
            collectionId,
            uuidv4(),
            data,
        )

        console.log(promise);
        promise.then(
            function (response) {
                toast.success("Daily Progress Added!!")
                console.log(response);
                window.location.reload()
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
                // window.location.reload()
            },
        );
        e.target.reset()
    }


    return (
        <div className="max-w-7xl mx-auto container lg:px-8 px-5 mt-10 text-white">
            <form
                action=""
                onSubmit={handleSubmit}
                className="flex flex-col justify-center gap-3 mb-10"
            >
                <div className='flex flex-col gap-3'>
                    <label className='text-xl font-semibold'>What tasks/goals did you accomplish yesterday?</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="I was a superhero yesterday saving lots of people...."
                        className="border p-2 bg-gray-300 rounded-md text-black placeholder-gray-600"
                        onChange={(e) => {
                            setYesterdayItem(e.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='flex flex-col gap-1 text-xl font-semibold'>What do you want to accomplish today or have already accomplished based on your today&apos;s goal?
                        {/* <span className='text-base text-gray-500'>*Character limit is 2000.</span> */}
                    </label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="I wanna/have learn/learnt a new technology..."
                        className="border p-2 rounded-md bg-gray-300 text-black placeholder-gray-600"
                        onChange={(e) => {
                            setTodayItem(e.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='text-xl font-semibold'>Did you achieved something great today like a new achievement in your life?</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="I got a new job...."
                        className="border p-2 bg-gray-300 rounded-md text-black placeholder-gray-600"
                        onChange={(e) => {
                            setAchievementItem(e.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='text-xl font-semibold'>Did you faced any challenges or came across a barrier or learnt something new?</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="I faced many challenges and learnt...."
                        className="border p-2 bg-gray-300 rounded-md text-black placeholder-gray-600"
                        onChange={(e) => {
                            setLearningItem(e.target.value)
                        }}
                    />
                </div>
                <button
                    className="bg-pink-600 hover:bg-pink-700 p-2 lg:w-1/6 w-full text-white rounded-md"
                    type="submit"
                >
                    Add Progress
                </button>
            </form>
            <TailwindToaster />
        </div>
    )
}

export default ProgressForm