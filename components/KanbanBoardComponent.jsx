import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { databases } from "@/appwrite/appwrite";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import { Query } from "appwrite";
import AddKanbanItemForm from "./AddKanbanItemForm";
import Image from "next/image";

const KanbanBoardComponent = (userId) => {
    const [board, setBoard] = useState({
        columns: {
            todo: { id: "todo", title: "To Do", items: [] },
            inprogress: { id: "inprogress", title: "In Progress", items: [] },
            done: { id: "done", title: "Done", items: [] },
        },
    });
    const [isLoading, setIsLoading] = useState(true);
    // alert(userId.userId)

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_KANBAN_BOARD_COLLECTION_ID

    useEffect(() => {
        fetchBoardData();
    }, []);

    const handleAddItem = (newItem) => {
        // Create a new column or update an existing column
        setBoard((prevBoard) => {
            const columnId = "todo"; // Set the desired column ID

            return {
                ...prevBoard,
                columns: {
                    ...prevBoard.columns,
                    [columnId]: {
                        ...prevBoard.columns[columnId],
                        items: [...prevBoard.columns[columnId].items, newItem],
                    },
                },
            };
        });
        // Update the state or perform any necessary logic to update the board
        // For example:
        // const updatedColumns = { ...board.columns };
        // updatedColumns[columnId].items.push(newItem);
        // setBoard({ columns: updatedColumns });
    };

    const fetchBoardData = async () => {
        try {
            const response = await databases.listDocuments(databaseId,
                collectionId,
                // [
                //     Query.equal("created_by", [userId.userId]),
                // ]
            );
            const documents = response.documents;
            console.log(documents);
            const columns = {};

            for (const document of documents) {
                const { id, boardtitle, status, image, boarditem, created_by } = document;
                if (!columns[status]) {
                    columns[status] = {
                        id: status,
                        boardtitle: status,
                        image: status,
                        boarditem: status,
                        created_by: status,
                        items: [],
                    };
                }
                columns[status].items.push({ id: document.$id, boardtitle, image, boarditem, created_by });
            }

            setBoard({ columns });
            setIsLoading(false)
        } catch (error) {
            toast.error(error.message)
            console.error("Error fetching board data:", error);
            setIsLoading(false)
        }
    };

    const onDragEnd = async (result) => {
        const { source, destination } = result;

        if (!destination) return;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
            return;

        const sourceColumn = board.columns[source.droppableId];
        const destinationColumn = board.columns[destination.droppableId];

        const sourceItems = Array.from(sourceColumn.items);
        const destinationItems = Array.from(destinationColumn.items);

        const [draggedItem] = sourceItems.splice(source.index, 1);
        destinationItems.splice(destination.index, 0, draggedItem);

        const newBoard = {
            ...board,
            columns: {
                ...board.columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destinationColumn,
                    items: destinationItems,
                },
            },
        };

        setBoard(newBoard);

        // Update the Appwrite collection with the new column assignments
        const itemId = draggedItem.id;
        const newStatus = destination.droppableId;

        try {
            await databases.updateDocument(databaseId,
                collectionId, itemId, {
                status: newStatus,
            });
        } catch (error) {
            toast.error(error.message)
            console.error("Error updating document:", error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // if (Object.keys(board.columns).length === 0) {
    //     // Render static dummy board when no data is available
    //     <StaticBoard />
    // }

    return (
        <section className="container mx-auto max-w-[84rem] lg:px-8 px-5">
            <div>
                <h2>Kanban Board</h2>
            </div>
            <AddKanbanItemForm userId={userId} />
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex items-center justify-center py-8">
                    {Object.values(board.columns).map((column) => (
                        <div
                            key={column.id}
                            className="flex flex-col text-black items-center w-full m-4 bg-gray-100 rounded-lg"
                        >
                            <h3 className="text-xl font-bold m-4">{column.boardtitle}</h3>

                            <Droppable droppableId={column.id}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`lg:w-96 w-full px-4 py-2 mb-4 ${snapshot.isDraggingOver ? 'bg-blue-200' : 'bg-gray-300'
                                            }`}
                                    >
                                        {column.items.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={` w-full gap-2 text-center p-2 mb-4 rounded-lg ${snapshot.isDragging ? 'bg-blue-100' : 'bg-blue-300'
                                                            }`}
                                                    >
                                                        {/* {item.boardtitle} */}
                                                        <div className="flex flex-col gap-2">
                                                            <h3 className="font-medium text-lg">{item.boardtitle}</h3>
                                                            <p className="font-normal text-base">{item.boarditem}</p>
                                                            <div className='flex p-2'>
                                                                <Image width={200} height={100} src={"https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_1280.jpg"} className='w-full h-full' alt="kanban item image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </div>
            </DragDropContext>
            <TailwindToaster />
        </section>
    );
};

export default KanbanBoardComponent;
