import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { databases } from "@/appwrite/appwrite";

const KanbanBoard = () => {
    const [board, setBoard] = useState({ columns: {} });

    useEffect(() => {
        fetchBoardData();
    }, []);

    const collectionId = "6466067e1863a7ff50de"

    const fetchBoardData = async () => {
        try {
            const response = await databases.listDocuments("646605464de2f5cb7435",
                collectionId);
            const documents = response.documents;
            console.log(documents);
            const columns = {};

            for (const document of documents) {
                const { id, boardtitle, status, image } = document;
                if (!columns[status]) {
                    columns[status] = {
                        id: status,
                        boardtitle: status,
                        image: status,
                        items: [],
                    };
                }
                columns[status].items.push({ id: uuidv4(), boardtitle, image });
            }

            setBoard({ columns });
        } catch (error) {
            console.error("Error fetching board data:", error);
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
            await client.database.updateDocument(collectionId, itemId, {
                status: newStatus,
            });
        } catch (error) {
            console.error("Error updating document:", error);
        }
    };

    const createNewItem = () => { }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex justify-center py-8">
                {Object.values(board.columns).map((column) => (
                    <div
                        key={column.id}
                        className="flex flex-col text-black items-center lg:w-1/4 w-full m-4 bg-gray-100 rounded-lg"
                    >
                        <h3 className="text-lg font-semibold m-4">{column.boardtitle}</h3>
                        <Droppable droppableId={column.id}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`w-full px-4 py-2 mb-4 ${snapshot.isDraggingOver ? 'bg-blue-200' : 'bg-gray-300'
                                        }`}
                                >
                                    {column.items.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`w-full p-2 mb-2 rounded-lg ${snapshot.isDragging ? 'bg-blue-100' : 'bg-gray-300'
                                                        }`}
                                                >
                                                    {item.boardtitle}
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
    );
};

export default KanbanBoard;
