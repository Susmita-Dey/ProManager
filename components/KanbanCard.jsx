import { databases, storage } from '@/appwrite/appwrite';
import Image from 'next/image';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';
import TailwindToaster from './TailwindToaster';

function KanbanCard({ columnId, itemId, index, imageFileId, boardtitle, boarditem }) {
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_KANBAN_BOARD_COLLECTION_ID;
    const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;

    // Generate the image URL using the file ID
    if (imageFileId == null) {
        imageFileId = "647ac9794feb5770d131";
    }
    const imageUrl = storage.getFilePreview(bucketId, imageFileId, 1000, 1000, "center", 100);

    const deleteKanbanItem = (id) => {
        const promise = databases.deleteDocument(databaseId, collectionId, id);
        promise.then(
            function (response) {
                toast.success("Kanban Item deleted successfully!!");
                console.log(response);
                window.location.reload();
            },
            function (error) {
                toast.error(error.message);
                console.log(error);
            }
        );
    };

    return (
        <Droppable droppableId={columnId}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    <div className="w-full gap-2 text-center p-2 mb-4 rounded-lg bg-blue-300">
                        <Draggable key={itemId} draggableId={itemId.toString()} index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`${snapshot.isDragging ? "bg-pink-800" : ""}`}
                                >
                                    <div className="flex flex-col gap-2 my-1">
                                        <h3 className="font-medium text-lg">{boardtitle}</h3>
                                        <p className="font-normal text-base">{boarditem}</p>
                                        <div className="flex p-2 justify-center items-center">
                                            {imageUrl ? (
                                                <div className="flex px-2">
                                                    <img src={imageUrl} className="w-full h-full" alt="kanban item image" />
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
                                        <button
                                            className="relative top-0 left-2 flex justify-center items-center text-white font-medium p-2 mr-3 text-center border border-red-500 bg-rose-900 rounded-md"
                                            onClick={() => {
                                                deleteKanbanItem(itemId);
                                            }}
                                        >
                                            <MdDeleteForever className="text-2xl" />
                                            Delete
                                        </button>
                                    </div>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Draggable>
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>
    );
}

export default KanbanCard;
