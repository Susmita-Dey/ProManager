import React, { useEffect, useState } from "react";
import { databases } from "@/appwrite/appwrite";
import { Query } from "appwrite";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import Loader from "./Loader";
import EditTasklist from "./EditTasklist";

function Todos(userId) {
  const [todos, setTodos] = useState();
  const [loader, setLoader] = useState(false);

  const [showModalForm, setShowModalForm] = useState(false);

  const openModalForm = () => {
    setShowModalForm(true);
  };

  const closeModalForm = () => {
    setShowModalForm(false);
  };

  // alert(userId.userId);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_TASKLIST_COLLECTION_ID;

  useEffect(() => {
    setLoader(true);
    const getTodos = databases.listDocuments(databaseId, collectionId, [
      Query.equal("created_by", [userId.userId]),
    ]);
    getTodos.then(
      function (response) {
        setTodos(response.documents);
        console.log(response.documents);
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
    setLoader(false);
  }, []);

  const deleteTodo = (id) => {
    const promise = databases.deleteDocument(databaseId, collectionId, id);
    promise.then(
      function (response) {
        toast.success("Task deleted successfully!!");
        console.log(response);
        window.location.reload();
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl container mx-auto lg:px-8 px-5">
      <h2 className="text-xl font-bold mb-2 text-white">Todo List</h2>
      <div>
        {todos &&
          todos.map((item) => (
            <div key={item.$id}>
              <div className="p-4 flex items-center justify-between border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4">
                <div>
                  <p className="text-white">{item.todoitem}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <span
                    className="text-white cursor-pointer"
                    onClick={openModalForm}
                  >
                    Edit
                  </span>
                  <span
                    className="text-white cursor-pointer"
                    onClick={() => {
                      deleteTodo(item.$id);
                    }}
                  >
                    Delete
                  </span>
                </div>
              </div>
              {showModalForm && (
                <EditTasklist
                  closeModal={closeModalForm}
                  documentId={item.$id}
                  taskval={item.todoitem}
                  userId={userId.userId}
                />
              )}
            </div>
          ))}
      </div>
      <TailwindToaster />
    </div>
  );
}

export default Todos;
