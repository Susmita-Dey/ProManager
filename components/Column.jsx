import React from "react";
import PropTypes from "prop-types";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column = ({ id, kanban, index }) => {
  console.log(id);
  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Droppable droppableId={index.toString()} type="card">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`p-2 rounded-2xl shadow-sm ${snapshot.isDraggingOver ? "bg-green-200" : "bg-gray-300/50"
                    }`}
                >
                  <h2>{id}</h2>
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    </>
  );
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  kanban: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default Column;
