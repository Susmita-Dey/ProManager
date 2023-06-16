import { databases, storage } from "@/appwrite/appwrite";
import { montserrat, nunito } from "@/context/fonts";
import Image from "next/image";
import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import toast from "react-hot-toast";
import { MdDelete, MdDeleteForever, MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import TailwindToaster from "./TailwindToaster";

function KanbanCard({
  userId,
  items,
  columnId,
  itemId,
  index,
  imageFileId,
  boardtitle,
  boarditem,
}) {
  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId =
    process.env.NEXT_PUBLIC_APPWRITE_KANBAN_BOARD_COLLECTION_ID;
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boardTitle, setBoardTitle] = useState(boardtitle);
  const [boardItem, setBoardItem] = useState(boarditem);
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Generate the image URL using the file ID
  if (imageFileId == null) {
    imageFileId = "647ac9794feb5770d131";
  }
  const imageUrl = storage.getFilePreview(
    bucketId,
    imageFileId,
    1000,
    1000,
    "center",
    100
  );

  const deleteKanbanItem = (id) => {
    const promise = databases.deleteDocument(databaseId, collectionId, id);
    promise.then(
      function (response) {
        toast.success("Kanban Item deleted successfully!!");
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
    setIsModalOpen(false);
    window.location.reload();
  };

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

        const promise = databases.updateDocument(
          databaseId,
          collectionId,
          itemId,
          data
        );

        console.log(promise);
        promise.then(
          function (response) {
            toast.success("Kanban item updated succesfully!!");
            console.log(response);
            window.location.reload();
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

    e.target.reset();
    handleCloseModal();
  };

  return (
    <>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className="w-full gap-2 text-center p-2 mb-4 rounded-lg bg-blue-300">
              <Draggable key={itemId} draggableId={itemId} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`${
                      snapshot.isDragging ? "bg-pink-500 text-white my-2" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-2 my-1">
                      <h3 className="font-medium text-lg">{boardtitle}</h3>
                      <p className="font-normal text-base">{boarditem}</p>
                      <div className="flex p-2 justify-center items-center">
                        {imageUrl ? (
                          <div className="flex px-2">
                            <img
                              src={imageUrl}
                              className="w-full h-full"
                              alt="kanban item image"
                            />
                          </div>
                        ) : (
                          <div className="flex px-2">
                            <Image
                              width={1000}
                              height={1000}
                              src="https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_1280.jpg"
                              className="w-full h-full"
                              alt="kanban item image"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-row justify-around items-center gap-2 px-2">
                        <button
                          className="flex flex-row gap-2 justify-center items-center text-white font-medium px-8 py-2 text-center border border-pink-900 bg-pink-900 rounded-md md:w-full w-1/2"
                          onClick={() => handleOpenModal()}
                        >
                          <MdEdit className="text-2xl" /> Edit
                        </button>
                        <button
                          className="flex flex-row gap-2 justify-center items-center text-white bg-rose-500 font-medium px-8 py-2 text-center border border-red-500 hover:bg-rose-900 rounded-md md:w-full w-1/2"
                          onClick={() => {
                            deleteKanbanItem(itemId);
                          }}
                        >
                          Delete <MdDelete className="text-2xl" />
                        </button>
                      </div>
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
            {isModalOpen && (
              <div className={`max-w-7xl mx-auto container lg:px-8 px-5 mt-10`}>
                <div className="z-50 fixed inset-0 bg-opacity-50 flex flex-col justify-center items-center">
                  <div className="bg-gray-900 text-white border-2 border-purple-500 rounded-lg p-6">
                    <div className="flex flex-row justify-between mb-4 items-center gap-5">
                      <h2
                        className={`${montserrat.className} text-xl font-bold`}
                      >
                        Add Kanban Item
                      </h2>
                      <RxCross2
                        className="text-xl font-bold relative top-0 right-0 hover:text-pink-600 hover:scale-150 text-gray-200 cursor-pointer w-6 h-6"
                        onClick={handleCloseModal}
                      />
                    </div>
                    <form
                      action="#"
                      onSubmit={handleSubmit}
                      className="flex flex-col justify-center gap-3 mb-5"
                    >
                      <div className="flex flex-col gap-3">
                        <label className="text-xl font-semibold">
                          Kanban Title:
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          required
                          placeholder={boardtitle}
                          defaultValue={boardtitle}
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
                          defaultValue={boarditem}
                          placeholder={boarditem}
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
                            *Files with extensions *.jpg,*.jpeg,*.png,*.svg and
                            *.gif are supported.
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
                        className={`${nunito.className} bg-pink-600 font-bold hover:bg-pink-700 p-2 mt-4 w-full text-white rounded-md`}
                        type="submit"
                      >
                        Update kanban item
                      </button>
                    </form>
                  </div>
                </div>
                <TailwindToaster />
              </div>
            )}
          </div>
        )}
      </Droppable>
      <TailwindToaster />
    </>
  );
}

export default KanbanCard;
