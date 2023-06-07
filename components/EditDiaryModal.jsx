import { databases, storage } from "@/appwrite/appwrite";
import { v4 as uuidv4 } from "uuid";
import { montserrat } from "@/context/fonts";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import TailwindToaster from "./TailwindToaster";

function EditDiaryModal({ selectedNote, closeModal, closeReload }) {
  const [diaryTitle, setDiaryTitle] = useState("");
  const [noteItem, setNoteItem] = useState("");
  const [noteImage, setNoteImage] = useState(null);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_DIARY_COLLECTION_ID;
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNoteImage(file);
  };

  const updateNote = () => {
    if (!selectedNote) return;
    const uploadPromise = storage.createFile(bucketId, uuidv4(), noteImage);

    // Create the document with the text data and the file ID returned from the upload
    uploadPromise
      .then((result) => {
        const fileId = result.$id;

        const data = {
          diarytitle: diaryTitle,
          diarynote: noteItem,
          image: fileId,
        };
        console.log(data);

        const promise = databases.updateDocument(
          databaseId,
          collectionId,
          selectedNote.$id,
          data
        );
        promise.then(
          function (response) {
            toast.success("Note updated successfully!!");
            console.log(response);
            closeReload();
          },
          function (error) {
            toast.error(error.message);
            console.log(error);
          }
        );
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 bg-opacity-50 flex flex-col justify-center items-center">
        <div className="bg-gray-900 border-2 border-cyan-500 rounded-lg p-6 lg:w-auto md:w-auto lg:h-auto md:h-auto w-80 h-[40rem]">
          <div className="flex flex-row justify-between mb-4 items-center gap-5">
            <h2 className={`${montserrat.className} text-xl font-bold`}>
              Add Note
            </h2>
            <RxCross2
              className="text-xl font-bold relative top-0 right-0 hover:text-pink-600 hover:scale-150 text-gray-200 cursor-pointer w-6 h-6"
              onClick={closeModal}
            />
          </div>
          <div className="flex flex-col gap-4 justify-center mb-10">
            <div className="flex w-full flex-col gap-4">
              <label className="text-xl font-semibold">Note Title:</label>
              <input
                type="text"
                name=""
                id=""
                placeholder={selectedNote?.diarytitle}
                className="border p-3 rounded-md text-pink-600 placeholder-gray-600"
                onChange={(e) => {
                  setDiaryTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="flex flex-col gap-1 text-xl font-semibold">
                Note Details:
                <span className="text-base text-gray-500">
                  *Character limit is 2000.
                </span>
              </label>
              <textarea
                name="note"
                id="note"
                cols="30"
                rows="5"
                placeholder={selectedNote?.diarynote}
                className="border p-2 rounded-md text-pink-600 placeholder-gray-600"
                onChange={(e) => {
                  setNoteItem(e.target.value);
                }}
              ></textarea>
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
                className="border p-2 rounded-md text-pink-600 placeholder-gray-600"
                placeholder={selectedNote?.image}
                onChange={handleImageUpload}
              />
            </div>
            <button
              className="bg-pink-600 text-white hover:bg-pink-700 px-3 py-2 rounded-md"
              onClick={updateNote}
            >
              Update Note
            </button>
          </div>
          <TailwindToaster />
        </div>
      </div>
    </div>
  );
}

export default EditDiaryModal;
