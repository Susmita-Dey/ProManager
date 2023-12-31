import React, { useEffect, useState } from "react";
import { databases, storage } from "@/appwrite/appwrite";
import { Query } from "appwrite";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import Image from "next/image";
import DiaryCard from "./DiaryCard";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import Loader from "./Loader";
import EditDiaryModal from "./EditDiaryModal";
import { montserrat, roboto } from "@/context/fonts";
import NoItems from "./NoItems";

function Diary(userId) {
  const [diary, setDiary] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_DIARY_COLLECTION_ID;

  // console.log(userId.userId);
  useEffect(() => {
    setLoader(true);
    const getDiary = databases.listDocuments(databaseId, collectionId, [
      Query.equal("created_by", [userId.userId]),
    ]);
    getDiary.then(
      function (response) {
        setDiary(response.documents);
        console.log(response.documents);
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
    setLoader(false);
  }, []);

  const editNote = (note) => {
    setSelectedNote(note);
    handleOpenModal();
  };

  const deleteNote = (id) => {
    const promise = databases.deleteDocument(databaseId, collectionId, id);
    promise.then(
      function (response) {
        toast.success("Note deleted successfully!!");
        console.log(response);
        closeAndReload();
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
  };

  const closeAndReload = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
    window.location.reload();
  };

  if (loader) {
    return <Loader />;
  }

  if (Object.keys(diary).length === 0) {
    return (
      <NoItems
        title={"My Secret Notes"}
        subtitle={"You haven't made any notes yet!!"}
      />
    );
  }

  return (
    <section className={` max-w-7xl container lg:px-8 px-5 mt-16 mx-auto`}>
      <h2
        className={`${montserrat.className} text-2xl font-bold mb-2 text-white underline underline-offset-2 decoration-wavy`}
      >
        My Secret Notes
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4">
        {diary &&
          diary.map((item) => (
            <div
              key={item.$id}
              className="p-4 flex flex-col items-center lg:justify-start justify-center border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4"
            >
              <DiaryCard
                key={item.$id}
                imageFileId={item.image}
                diaryTitle={item.diarytitle}
                diaryNote={item.diarynote}
              />
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                <button
                  className="flex flex-row gap-2 text-white font-medium px-16 py-2 text-center border border-pink-900 bg-pink-900 rounded-md"
                  onClick={() => editNote(item)}
                >
                  <MdEdit className="text-2xl" /> Edit
                </button>
                <button
                  className="flex flex-row gap-2 text-white font-medium px-[3.2rem] py-2 text-center border border-red-500 hover:bg-rose-900 rounded-md"
                  onClick={() => {
                    deleteNote(item.$id);
                  }}
                >
                  Delete <MdDeleteForever className="text-2xl" />
                </button>
              </div>
            </div>
          ))}
        <div>
          {isModalOpen && (
            <EditDiaryModal
              closeModal={handleCloseModal}
              closeReload={closeAndReload}
              selectedNote={selectedNote}
            />
          )}
        </div>
      </div>
      <TailwindToaster />
    </section>
  );
}

export default Diary;
