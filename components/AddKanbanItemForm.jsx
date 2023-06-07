import { databases, storage } from "@/appwrite/appwrite";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import { RxCross2 } from "react-icons/rx";
import { montserrat, nunito } from "@/context/fonts";

function AddKanbanItemForm({ userId, closeModalForm }) {
  // console.log(userId.userId);
  const [boardTitle, setBoardTitle] = useState("");
  const [boardItem, setBoardItem] = useState("");
  const [boardImage, setBoardImage] = useState(null);

  const options = [
    { value: "todo", text: "Todo" },
    { value: "inprogress", text: "In Progress" },
    { value: "done", text: "Done" },
  ];

  const [status, setStatus] = useState(options[0].value);

  const handleStatusChange = (event) => {
    console.log(event.target.value);
    setStatus(event.target.value);
  };

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;
  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId =
    process.env.NEXT_PUBLIC_APPWRITE_KANBAN_BOARD_COLLECTION_ID;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setBoardImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Upload the image to the bucket if selected
    let uploadPromise = Promise.resolve();
    if (boardImage) {
      uploadPromise = storage.createFile(bucketId, uuidv4(), boardImage);
    }

    // Create the document with the text data and the file ID returned from the upload
    uploadPromise
      .then((result) => {
        const fileId = result ? result.$id : null;
        const data = {
          boardtitle: boardTitle,
          boarditem: boardItem,
          status: status,
          image: fileId,
          created_by: userId.userId,
        };
        console.log(data);

        const promise = databases.createDocument(
          databaseId,
          collectionId,
          uuidv4(),
          data
        );

        console.log(promise);
        promise.then(
          function (response) {
            toast.success("New item added succesfully!!");
            console.log(response);
            window.location.reload();
          },
          function (error) {
            toast.error(error.message);
            console.log(error);
            // window.location.reload()
          }
        );
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });

    e.target.reset();
    closeModalForm();
  };

  return (
    <section className={`max-w-7xl mx-auto container lg:px-8 px-5 mt-10`}>
      <div className="fixed inset-0 bg-opacity-50 flex flex-col justify-center items-center">
        <div className="bg-gray-900 border-2 border-cyan-500 rounded-lg p-6">
          <div className="flex flex-row justify-between mb-4 items-center gap-5">
            <h2 className={`${montserrat.className} text-xl font-bold`}>
              Add Kanban Item
            </h2>
            <RxCross2
              className="text-xl font-bold relative top-0 right-0 hover:text-pink-600 hover:scale-150 text-gray-200 cursor-pointer w-6 h-6"
              onClick={closeModalForm}
            />
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-3 mb-10"
          >
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold">Kanban Title:</label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="Funny Weather"
                className="border p-2 rounded-md text-black placeholder-gray-600"
                onChange={(e) => {
                  setBoardTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="flex flex-col gap-1 text-xl font-semibold">
                Kanban Details:
                <span className="text-base text-gray-500">
                  *Character limit is 600.
                </span>
              </label>
              <input
                name="kanban"
                id="kanban"
                required
                placeholder="Now is the winter of our discontent. Made glorious summer by this sun of York...."
                className="border p-2 rounded-md text-black placeholder-gray-600"
                onChange={(e) => {
                  setBoardItem(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="flex flex-col gap-1 text-xl font-semibold">
                Status:
              </label>
              <select
                value={status}
                onChange={handleStatusChange}
                required
                className="border-2 rounded-md p-2 text-pink-600 border-pink-600"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className="flex flex-col gap-1 text-xl font-semibold">
                Image Cover:
                <span className="text-base text-gray-500">
                  *Files with extensions *.jpg,*.jpeg,*.png,*.svg and *.gif are
                  supported.
                </span>
              </label>
              <input
                type="file"
                id="imageFile"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <button
              className={`${nunito.className} bg-pink-600 font-bold hover:bg-pink-700 p-2 w-full text-white rounded-md`}
              type="submit"
            >
              Add kanban
            </button>
          </form>
        </div>
      </div>
      <TailwindToaster />
    </section>
  );
}

export default AddKanbanItemForm;
