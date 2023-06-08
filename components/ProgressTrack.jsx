import React, { useEffect, useState } from "react";
import { databases } from "@/appwrite/appwrite";
import { Query } from "appwrite";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import Loader from "./Loader";
import { MdDelete, MdEdit } from "react-icons/md";
import EditProgressModal from "./EditProgressModal";

function ProgressTrack(userId) {
  const [progress, setProgress] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedProgress, setSelectedProgress] = useState(null);

  const [showModalForm, setShowModalForm] = useState(false);

  const openModalForm = () => {
    setShowModalForm(true);
  };

  const closeModalForm = () => {
    setShowModalForm(false);
  };

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId =
    process.env.NEXT_PUBLIC_APPWRITE_PROGRESS_TRACK_COLLECTION_ID;

  // console.log(userId.userId);
  useEffect(() => {
    setLoader(true);
    const getProgress = databases.listDocuments(databaseId, collectionId, [
      Query.equal("created_by", [userId.userId]),
    ]);
    getProgress.then(
      function (response) {
        setProgress(response.documents);
        console.log(response.documents);
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
    setLoader(false);
  }, []);

  const editProgress = (progress) => {
    setSelectedProgress(progress);
    openModalForm();
  };

  const deleteProgress = (id) => {
    const promise = databases.deleteDocument(databaseId, collectionId, id);
    promise.then(
      function (response) {
        toast.success("Progress deleted successfully!!");
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
    setSelectedProgress(null);
    setShowModalForm(false);
    window.location.reload();
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl container lg:px-8 px-5 mx-auto my-4">
      <p className="lg:text-xl text-lg font-bold mt-7 mb-2 text-white">
        Progress Tracking List
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-start justify-center items-center gap-4">
        {progress &&
          progress.map((item) => (
            <div key={item.$id}>
              <div className="p-4 flex flex-col items-center justify-center border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-96 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4">
                <div className="flex p-2 gap-3 text-white">
                  <p className="lg:text-xl text-lg font-medium">
                    Date created:
                  </p>
                  <p className="lg:text-xl text-lg font-normal">
                    {item.$createdAt.slice(0, 10)}
                  </p>
                </div>
                <div className="w-full border border-white"></div>
                <div className="flex flex-col p-2 items-center justify-center gap-3 text-white">
                  <p className="lg:text-xl text-lg font-medium">
                    Progress made yesterday:
                  </p>
                  <p className="lg:text-xl text-lg text-center font-normal">
                    {item.done_yesterday}
                  </p>
                </div>
                <div className="w-full border border-white"></div>
                <div className="flex gap-3 flex-col p-2 items-center justify-center text-white">
                  <p className="lg:text-xl text-lg font-medium">
                    Progress made today:
                  </p>
                  <p className="lg:text-xl text-lg text-center font-normal">
                    {item.doing_today}
                  </p>
                </div>
                <div className="w-full border border-white"></div>
                <div className="flex flex-col items-center justify-center py-2 gap-3 text-white">
                  <p className="lg:text-xl text-lg font-medium">
                    Achievements:
                  </p>
                  <p className="lg:text-xl text-lg text-center font-normal">
                    {item.achievements}
                  </p>
                </div>
                <div className="w-full border border-white"></div>
                <div className="flex flex-col items-center justify-center p-2 gap-3 text-white">
                  <p className="lg:text-xl text-lg font-medium">
                    Learnings/Challenges:
                  </p>
                  <p className="text-center lg:text-xl text-lg font-normal">
                    {item.learnings}
                  </p>
                </div>
                <div className="w-full border border-white"></div>
                <div className="flex flex-row justify-between items-center lg:gap-6 gap-2 my-2">
                  <button
                    className="flex flex-row gap-2 text-white font-medium px-12 py-2 text-center border border-pink-800 bg-pink-800 rounded-md"
                    onClick={() => editProgress(item)}
                  >
                    <MdEdit className="text-2xl" /> Edit
                  </button>
                  <button
                    className="flex flex-row gap-2 text-white font-medium px-10 py-2 text-center border border-rose-500 hover:bg-rose-900 rounded-md"
                    onClick={() => {
                      deleteProgress(item.$id);
                    }}
                  >
                    Delete <MdDelete className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        {showModalForm && (
          <EditProgressModal
            closeModal={closeModalForm}
            closeReload={closeAndReload}
            selectedProgress={selectedProgress}
          />
        )}
      </div>
      <TailwindToaster />
    </div>
  );
}

export default ProgressTrack;
