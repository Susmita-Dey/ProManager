import { montserrat } from '@/context/fonts'
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

function StaticBoard() {
    return (
        <section className="container mx-auto max-w-[84rem] lg:px-8 px-5">
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col gap-2 my-4">
                    <h2 className={`${montserrat.className} text-4xl font-bold`}>Kanban Board</h2>
                    <p className="text-lg font-normal">Kanban Board</p>
                </div>
                <div className="flex justify-center py-8">
                    <div className="flex flex-col text-black items-center lg:w-1/4 w-full m-4 bg-gray-100 rounded-lg">
                        <h3 className="text-lg font-semibold m-4">Todo</h3>
                        <Droppable droppableId="todo">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`w-full px-4 py-2 mb-4 ${snapshot.isDraggingOver ? "bg-blue-200" : "bg-gray-300"
                                        }`}
                                >
                                    <Draggable draggableId={uuidv4()} index={0}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`w-full p-2 mb-2 rounded-lg ${snapshot.isDragging ? "bg-blue-100" : "bg-gray-300"
                                                    }`}
                                            >
                                                Ugh!! You need to complete me.
                                            </div>
                                        )}
                                    </Draggable>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                    <div className="flex flex-col text-black items-center lg:w-1/4 w-full m-4 bg-gray-100 rounded-lg">
                        <h3 className="text-lg font-semibold m-4">In Progress</h3>
                        <Droppable droppableId="inprogress">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`w-full px-4 py-2 mb-4 ${snapshot.isDraggingOver ? "bg-blue-200" : "bg-gray-300"
                                        }`}
                                >
                                    <Draggable draggableId={uuidv4()} index={0}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`w-full p-2 mb-2 rounded-lg ${snapshot.isDragging ? "bg-blue-100" : "bg-gray-300"
                                                    }`}
                                            >
                                                I&apos;m your ongoing task
                                            </div>
                                        )}
                                    </Draggable>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                    <div className="flex flex-col text-black items-center lg:w-1/4 w-full m-4 bg-gray-100 rounded-lg">
                        <h3 className="text-lg font-semibold m-4">Done</h3>
                        <Droppable droppableId="done">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`w-full px-4 py-2 mb-4 ${snapshot.isDraggingOver ? "bg-blue-200" : "bg-gray-300"
                                        }`}
                                >
                                    <Draggable draggableId={uuidv4()} index={0}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`w-full p-2 mb-2 rounded-lg ${snapshot.isDragging ? "bg-blue-100" : "bg-gray-300"
                                                    }`}
                                            >
                                                Wow!! You have completed me.
                                            </div>
                                        )}
                                    </Draggable>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StaticBoard