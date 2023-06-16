import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { databases } from "@/appwrite/appwrite";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import { Query } from "appwrite";
import AddKanbanItemForm from "./AddKanbanItemForm";
import KanbanCard from "./KanbanCard";
import { MdAddCircle, MdDeleteForever } from "react-icons/md";
import Loader from "./Loader";
import { montserrat } from "@/context/fonts";
import StaticKanban from "./StaticKanban";

const KanbanBoardComponent = (userId) => {
  const [board, setBoard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // alert(userId.userId)

  const [showModalForm, setShowModalForm] = useState(false);

  const openModalForm = () => {
    setShowModalForm(true);
  };

  const closeModalForm = () => {
    setShowModalForm(false);
  };

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId =
    process.env.NEXT_PUBLIC_APPWRITE_KANBAN_BOARD_COLLECTION_ID;

  useEffect(() => {
    fetchBoardData();
  }, []);

  const fetchBoardData = async () => {
    // const dummyData = {
    //     columns: {
    //         todo: {
    //             id: string,
    //             title: string,
    //             items: ["Hello World"]
    //         },
    //         inprogress: {
    //             id: string,
    //             title: string,
    //             items: ["I'm working"]
    //         },
    //         done: {
    //             id: string,
    //             title: string,
    //             items: ["Party!! It's done"]
    //         }
    //     }
    // }
    try {
      const response = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("created_by", [userId.userId]),
      ]);
      const documents = response.documents;
      console.log(documents);
      const columns = {};

      // board.push(dummyData)

      for (const document of documents) {
        const { id, boardtitle, status, image, boarditem, created_by } =
          document;
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
        columns[status].items.push({
          id: document.$id,
          boardtitle,
          image,
          boarditem,
          created_by,
        });
      }

      setBoard({ columns });
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.error("Error fetching board data:", error);
      setIsLoading(false);
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
      await databases.updateDocument(databaseId, collectionId, itemId, {
        status: newStatus,
      });
    } catch (error) {
      toast.error(error.message);
      console.error("Error updating document:", error);
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (Object.keys(board.columns).length === 0) {
    return (
      <section className="container mx-auto mt-10 mb-5 max-w-[84rem] lg:px-8 px-5">
        <div className="flex flex-col gap-4 justify-center text-center items-center">
          <h2
            className={`${montserrat.className}  text-3xl lg:text-4xl font-bold`}
          >
            Kanban Board
          </h2>
          <p className="text-lg lg:md:text-xl font-medium">
            Effortlessly add new items to your Kanban board and stay organized
            with ease.
          </p>
          <p className="text-base italic">
            P.S. Below ones are dummy!! 🤫 Add new items with proper status and
            use the full power of Kanban board.
          </p>
          <button
            className="bg-rose-600 font-medium px-4 py-2 lg:w-1/6 w-full flex flex-row gap-2 justify-center items-center"
            onClick={openModalForm}
          >
            Add New Item
            <MdAddCircle className="text-xl font-bold" />
          </button>
          {showModalForm && (
            <AddKanbanItemForm
              userId={userId}
              closeModalForm={closeModalForm}
            />
          )}
        </div>
        <StaticKanban dragEnd={onDragEnd} />
      </section>
    );
  }

  return (
    <section className="container mx-auto mt-10 mb-5 max-w-[84rem] lg:px-8 px-5">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2
          className={`${montserrat.className}  text-3xl lg:text-4xl font-bold`}
        >
          Kanban Board
        </h2>
        <p className="md:text-xl font-medium">
          Effortlessly add new items to your Kanban board and stay organized
          with ease.
        </p>
        <p className="text-lg">
          Add new items with proper status and use the full power of Kanban
          board.
        </p>
        <button
          className="bg-rose-600 font-medium px-4 py-2 lg:w-1/6 w-full flex flex-row gap-2 justify-center items-center"
          onClick={openModalForm}
        >
          Add New Item
          <MdAddCircle className="text-xl font-bold" />
        </button>
        {showModalForm && (
          <AddKanbanItemForm userId={userId} closeModalForm={closeModalForm} />
        )}
      </div>
      {/* <AddKanbanItemForm userId={userId} /> */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col lg:flex-row items-center justify-center py-8">
          {Object.values(board.columns).map((column) => (
            <div
              key={column.id}
              className="flex flex-col items-center w-full m-4 bg-gray-950 rounded-lg"
            >
              <h3 className="text-xl font-bold m-4">{column.boardtitle}</h3>
              <div className="lg:w-96 w-full px-4 overflow-auto h-96 py-2 mb-4 text-black">
                <Droppable droppableId={column.id}>
                  {(provided, snapshot) => (
                    <div
                      key={column.id}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`${
                        snapshot.isDraggingOver ? "bg-cyan-800" : ""
                      }`}
                      onScroll={(e) =>
                        // eslint-disable-next-line no-console
                        console.log(
                          "current scrollTop",
                          e.currentTarget.scrollTop
                        )
                      }
                    >
                      {column.items.map((item, index) => (
                        <div key={index}>
                          <KanbanCard
                            userId={userId}
                            items={item}
                            columnId={column.id}
                            itemId={item.id}
                            index={index}
                            boarditem={item.boarditem}
                            boardtitle={item.boardtitle}
                            imageFileId={item.image}
                          />
                        </div>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>
      <TailwindToaster />
    </section>
  );
};

export default KanbanBoardComponent;
