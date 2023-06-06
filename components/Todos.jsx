import React, { useEffect, useState } from "react";
import { databases } from "@/appwrite/appwrite";
import { Query } from "appwrite";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import Loader from "./Loader";
import { montserrat } from "@/context/fonts";
import { RxCross2 } from "react-icons/rx";

function Todos(userId) {
  const [todos, setTodos] = useState();
  const [loader, setLoader] = useState(false);

  const [todoItem, setTodoItem] = useState("");
  const data = { todoitem: todoItem };
  console.log(data);

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

  const editTask = (id) => {
    alert(id);
    const promise = databases.updateDocument(
      databaseId,
      collectionId,
      id,
      data
    );
    promise.then(
      function (response) {
        toast.success("Task updated successfully!!");
        console.log(response);
        window.location.reload();
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
  };

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
              {/* <EditTasklistModal
                showModal={showModalForm}
                closeModal={closeModalForm}
                documentId={item.$id}
                taskval={item.todoitem}
                userId={userId.userId}
              /> */}
              <div>
                {showModalForm && (
                  <div className="fixed inset-0 z-50 bg-opacity-50 flex flex-col justify-center items-center">
                    <div className="bg-gray-900 border-2 border-cyan-500 rounded-lg p-6 w-80 lg:w-[32rem] lg:h-52">
                      <div className="flex flex-row justify-between mb-4 items-center gap-5">
                        <h2
                          className={`${montserrat.className} text-xl font-bold`}
                        >
                          Add Task Item
                        </h2>
                        <RxCross2
                          className="text-xl font-bold relative top-0 right-0 hover:text-pink-600 hover:scale-150 text-gray-200 cursor-pointer w-6 h-6"
                          onClick={closeModalForm}
                        />
                      </div>
                      <div className="flex flex-col gap-4 justify-center mb-10">
                        <div className="flex w-full flex-col gap-4">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder={item.todoitem}
                            className="border p-3 rounded-md text-pink-600 placeholder-gray-600"
                            onChange={(e) => {
                              setTodoItem(e.target.value);
                            }}
                          />
                        </div>
                        <button
                          className="bg-pink-600 text-white hover:bg-pink-700 px-3 py-2 rounded-md"
                          onClick={() => {
                            editTask(item.$id);
                          }}
                        >
                          Update Task
                        </button>
                      </div>
                      <TailwindToaster />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
      <TailwindToaster />
    </div>
  );
}

export default Todos;
