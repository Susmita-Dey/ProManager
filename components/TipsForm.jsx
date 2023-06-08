import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "@/appwrite/appwrite";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import { montserrat } from "@/context/fonts";

function TipsForm(userId) {
  // console.log(userId.userId);
  const [tipsItem, setTipsItem] = useState("");
  const data = { tips: tipsItem, created_by: userId.userId };
  console.log(data);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PROTIPS_COLLECTION_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      databaseId,
      collectionId,
      uuidv4(),
      data
    );

    console.log(promise);
    promise.then(
      function (response) {
        console.log(response);
        toast.success("Successfully added new productivity tip!!");
        window.location.reload();
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
    e.target.reset();
  };

  return (
    <div
      className={` max-w-7xl mx-auto container lg:px-8 px-5 mt-10 text-white`}
    >
      <div className="flex flex-col gap-4 my-5 justify-center items-center">
        <h2 className={`${montserrat.className} text-4xl font-bold`}>
          Productivity Tips
        </h2>
        <p className="text-xl font-medium">
          Master your efficiency with these powerful strategies for maximum
          productivity
        </p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row gap-4 justify-center mb-10"
      >
        <div className="flex w-1/2 flex-col gap-4">
          {/* <label className='text-lg font-semibold'>Learnt some new productivity tips/tricks? Add them here one by one.</label> */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Follow your karma..."
            required
            className="border p-3 rounded-md text-black placeholder-gray-600"
            onChange={(e) => {
              setTipsItem(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-pink-600 hover:bg-pink-700 px-3 py-2 text-white rounded-md"
          type="submit"
        >
          Add New Tip
        </button>
      </form>
      <TailwindToaster />
    </div>
  );
}

export default TipsForm;
