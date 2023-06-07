import React, { useEffect, useState } from "react";
import { databases } from "@/appwrite/appwrite";
import { Query } from "appwrite";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import Loader from "./Loader";
import EditTipsModal from "./EditTipsModal";

function TipsList(userId) {
  const [tipsList, setTipsList] = useState();
  const [loader, setLoader] = useState(false);
  const [selectedTip, setSelectedTip] = useState(null);

  const [showModalForm, setShowModalForm] = useState(false);

  const openModalForm = () => {
    setShowModalForm(true);
  };

  const closeModalForm = () => {
    setShowModalForm(false);
  };
  // console.log(userId.userId);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PROTIPS_COLLECTION_ID;

  useEffect(() => {
    setLoader(true);
    const getTipsList = databases.listDocuments(databaseId, collectionId, [
      Query.equal("created_by", [userId.userId]),
    ]);
    getTipsList.then(
      function (response) {
        setTipsList(response.documents);
        console.log(response.documents);
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
    setLoader(false);
  }, []);

  const editTips = (tip) => {
    setSelectedTip(tip);
    openModalForm();
  };

  const deleteTips = (id) => {
    const promise = databases.deleteDocument(databaseId, collectionId, id);
    promise.then(
      function (response) {
        toast.success("Productivity tip deleted successfully!!");
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
    setSelectedTip(null);
    setShowModalForm(false);
    window.location.reload();
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="container lg:px-0 px-5 max-w-7xl mx-auto">
      <h3 className="text-xl font-bold mb-2 text-white">
        My Productivity Tips
      </h3>
      <div>
        {tipsList &&
          tipsList.map((item) => (
            <div key={item.$id}>
              <div className="p-4 flex items-center justify-between border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4">
                <div>
                  <p className="text-white">{item.tips}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <span
                    className="text-white cursor-pointer"
                    onClick={() => editTips(item)}
                  >
                    Edit
                  </span>
                  <span
                    className="text-white cursor-pointer"
                    onClick={() => deleteTips(item.$id)}
                  >
                    Delete
                  </span>
                </div>
              </div>
            </div>
          ))}
        {showModalForm && (
          <EditTipsModal
            closeModal={closeModalForm}
            closeReload={closeAndReload}
            selectedTip={selectedTip}
          />
        )}
      </div>
      <TailwindToaster />
    </div>
  );
}

export default TipsList;
