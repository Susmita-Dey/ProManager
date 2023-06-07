import { databases } from "@/appwrite/appwrite";
import { montserrat } from "@/context/fonts";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import TailwindToaster from "./TailwindToaster";

function EditTasklistModal({ selectedTask, closeModal, closeReload }) {
  const [todoItem, setTodoItem] = useState("");
  const data = { todoitem: todoItem };
  console.log(data);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_TASKLIST_COLLECTION_ID;

  const updateTask = () => {
    if (!selectedTask) return;

    const promise = databases.updateDocument(
      databaseId,
      collectionId,
      selectedTask.$id,
      data
    );
    promise.then(
      function (response) {
        toast.success("Task updated successfully!!");
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
        <div className="bg-gray-900 border-2 border-cyan-500 rounded-lg p-6 w-80 lg:w-[32rem] lg:h-52">
          <div className="flex flex-row justify-between mb-4 items-center gap-5">
            <h2 className={`${montserrat.className} text-xl font-bold`}>
              Add Task Item
            </h2>
            <RxCross2
              className="text-xl font-bold relative top-0 right-0 hover:text-pink-600 hover:scale-150 text-gray-200 cursor-pointer w-6 h-6"
              onClick={closeModal}
            />
          </div>
          <div className="flex flex-col gap-4 justify-center mb-10">
            <div className="flex w-full flex-col gap-4">
              <input
                type="text"
                name=""
                id=""
                placeholder={selectedTask?.todoitem}
                className="border p-3 rounded-md text-pink-600 placeholder-gray-600"
                onChange={(e) => {
                  setTodoItem(e.target.value);
                }}
              />
            </div>
            <button
              className="bg-pink-600 text-white hover:bg-pink-700 px-3 py-2 rounded-md"
              onClick={updateTask}
            >
              Update Task
            </button>
          </div>
          <TailwindToaster />
        </div>
      </div>
    </div>
  );
}

export default EditTasklistModal;
