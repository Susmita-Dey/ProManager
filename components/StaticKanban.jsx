import Image from "next/image";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function StaticKanban({ dragEnd }) {
  const dummyData = {
    columns: {
      todo: {
        id: "todo",
        title: "To Do",
        items: [{ boardtitle: "Hello World", boarditem: "Party!! It's done" }],
      },
      inprogress: {
        id: "inprogress",
        title: "In Progress",
        items: [{ boardtitle: "I'm working", boarditem: "Party!! It's done" }],
      },
      done: {
        id: "done",
        title: "Done",
        items: [
          { boardtitle: "Party!! It's done", boarditem: "Party!! It's done" },
        ],
      },
    },
  };

  return (
    <>
      <div>
        {/* Render the dummy data */}
        <DragDropContext onDragEnd={dragEnd}>
          <div className="flex flex-col lg:flex-row items-center justify-center py-8">
            {Object.values(dummyData.columns).map((column) => (
              <div
                key={column.id}
                className="flex flex-col items-center w-full m-4 bg-gray-950 rounded-lg"
              >
                <h3 className="text-xl font-bold m-4">{column.title}</h3>
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
                      >
                        {column.items.map((item, index) => (
                          <div key={index}>
                            <Droppable droppableId={column.id}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                >
                                  <div className="w-full gap-2 text-center p-2 mb-4 rounded-lg bg-blue-300">
                                    <Draggable
                                      key={item.id}
                                      draggableId={item.id}
                                      index={index}
                                    >
                                      {(provided, snapshot) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className={`${
                                            snapshot.isDragging
                                              ? "bg-pink-500 text-white my-2"
                                              : ""
                                          }`}
                                        >
                                          <div className="flex flex-col gap-2 my-1">
                                            <h3 className="font-medium text-lg">
                                              {item.boardtitle}
                                            </h3>
                                            <p className="font-normal text-base">
                                              {item.boarditem}
                                            </p>
                                            <div className="flex p-2 justify-center items-center">
                                              <div className="flex px-2">
                                                <Image
                                                  width={1000}
                                                  height={1000}
                                                  src="https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_1280.jpg"
                                                  className="w-full h-full"
                                                  alt="kanban item image"
                                                />
                                              </div>
                                            </div>
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
                          </div>
                        ))}
                      </div>
                    )}
                  </Droppable>
                </div>
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

export default StaticKanban;
