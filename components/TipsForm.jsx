import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { databases } from '@/appwrite/appwrite'
import toast from 'react-hot-toast';
import TailwindToaster from './TailwindToaster';

function TipsForm(userId) {
    // console.log(userId.userId);
    const [tipsItem, setTipsItem] = useState("")
    const data = { tips: tipsItem, created_by: userId.userId };
    console.log(data);


    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument(
            "646605464de2f5cb7435",
            "646605ece1eec67da04a",
            uuidv4(),
            data,
        )

        console.log(promise);
        promise.then(
            function (response) {
                console.log(response);
                toast.success("Successfully added new productivity tip!!")
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
                className="flex flex-col lg:flex-row gap-4 justify-center mb-10"
            >
                <div className='flex flex-col gap-4'>
                    <label className='text-2xl font-semibold'>Learnt some new productivity tips/tricks? Add them here one by one.</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Follow your karma..."
                        className="border p-3 rounded-md text-black placeholder-gray-600"
                        onChange={(e) => {
                            setTipsItem(e.target.value)
                        }}
                    />
                </div>
                <button
                    className="bg-pink-600 hover:bg-pink-700 p-3 text-white lg:mt-12 rounded-md"
                    type="submit"
                >
                    Add New Tip
                </button>
            </form>
            <TailwindToaster />
        </div>
    )
}

export default TipsForm