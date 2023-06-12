import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "@/appwrite/appwrite";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import { montserrat } from "@/context/fonts";

function TodoForm(userId) {
  // console.log(userId.userId);
  const [todoItem, setTodoItem] = useState("");
  const data = { todoitem: todoItem, created_by: userId.userId };
  console.log(data);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_TASKLIST_COLLECTION_ID;

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
        toast.success("Successfully added new task!!");
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
    <div className="max-w-7xl container lg:px-8 px-5 mx-auto mt-10 text-white">
      <div className="flex flex-col gap-4 my-5 justify-center items-center">
        <h2
          className={`${montserrat.className} text-3xl lg: text-3xl lg:text-4xl font-bold`}
        >
          Task list
        </h2>
        <p className="text-center md:md:text-xl font-medium">
          Effortlessly Manage and Dominate Your Tasks with ProManager&apos;s
          Powerful Tasklist Feature
        </p>
      </div>
      <form
        action="#"
        onSubmit={handleSubmit}
        className="flex lg:flex-row flex-col gap-4 justify-center mb-10"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          required
          className="border p-2 w-full lg:w-2/3 rounded-md text-black placeholder-gray-600"
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
        />
        <button
          className="bg-pink-600 hover:bg-pink-700 p-2 text-white lg:ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
      <TailwindToaster />
    </div>
  );
}

export default TodoForm;
