import { databases } from "@/appwrite/appwrite";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import IdeaCard from "./IdeaCard";
import TailwindToaster from "./TailwindToaster";
import { Query } from "appwrite";
import Loader from "./Loader";
import { montserrat, roboto } from "@/context/fonts";
import { MdDelete, MdEdit } from "react-icons/md";
import EditIdeasModal from "./EditIdeasModal";
import NoItems from "./NoItems";

function DesignerIdeas(userId) {
  // console.info(userId.userId);
  const [ideaItem, setIdeaItem] = useState("");
  const category = "designer";
  const data = {
    proideas: ideaItem,
    category: category,
    created_by: userId.userId,
  };
  console.log(data);
  const [ideas, setIdeas] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);

  const [showModalForm, setShowModalForm] = useState(false);

  const openModalForm = () => {
    setShowModalForm(true);
  };

  const closeModalForm = () => {
    setShowModalForm(false);
  };

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_IDEALIST_COLLECTION_ID;

  const prodesigner = [
    "User interface (UI) design toolkit or asset library",
    "Mood board and visual inspiration platform",
    "Prototyping tool with interactive components and animations",
    "Design collaboration platform for remote teams",
    "Typography pairing and color scheme generator",
    "UX research and usability testing platform",
    "Responsive website design template or framework",
    "Illustration and graphic design asset marketplace",
    "Branding and logo design generator",
    "Design thinking workshop facilitation toolkit",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      databaseId,
      collectionId,
      uuidv4(),
      data
    );

    console.log(promise);
    promise.then(
      function (response) {
        console.log(response);
        toast.success("Successfully added new project idea!!");
        window.location.reload();
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
    e.target.reset();
  };

  useEffect(() => {
    setLoader(true);
    const getIdeas = databases.listDocuments(databaseId, collectionId, [
      Query.equal("created_by", [userId.userId]),
      Query.equal("category", [category]),
    ]);
    getIdeas.then(
      function (response) {
        setIdeas(response.documents);
        console.log(response.documents);
      },
      function (error) {
        toast.error(error.message);
        console.log(error);
      }
    );
    setLoader(false);
  }, []);

  const editIdea = (idea) => {
    setSelectedIdea(idea);
    openModalForm();
  };

  const deleteIdea = (id) => {
    const promise = databases.deleteDocument(databaseId, collectionId, id);
    promise.then(
      function (response) {
        toast.success("Project idea deleted successfully!!");
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
    setSelectedIdea(null);
    setShowModalForm(false);
    window.location.reload();
  };

  if (loader) {
    return <Loader />;
  }

  if (Object.keys(ideas).length === 0) {
    return (
      <>
        <div
          className={` max-w-7xl mx-auto container lg:px-8 px-5 mt-10 text-white`}
        >
          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-4 justify-center mb-10"
          >
            <div className="flex flex-col gap-4">
              <label className="text-2xl font-semibold">
                Got some new project idea to add to your designer list? <br />
                Add them here one by one.
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="Built a scientifical robot..."
                className="border p-3 rounded-md text-black placeholder-gray-600"
                onChange={(e) => {
                  setIdeaItem(e.target.value);
                }}
              />
            </div>
            <button
              className="bg-pink-600 hover:bg-pink-700 p-3 text-white lg:mt-20 rounded-md"
              type="submit"
            >
              Add New Idea
            </button>
          </form>
          <TailwindToaster />
        </div>
        <NoItems
          title={"My Ideas"}
          subtitle={"You haven't listed any ideas here yet!!"}
        />
        <h2
          className={`${montserrat.className} text-3xl font-semibold text-center my-10`}
        >
          List of Design Ideas
        </h2>
        <div className="flex lg:flex-row flex-wrap flex-col justify-center items-center gap-5">
          {prodesigner.map((item, index) => (
            <div
              key={index}
              className="max-w-7xl flex lg:flex-row flex-col justify-center items-center gap-2"
            >
              <IdeaCard key={item} idea={item} />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={` max-w-7xl mx-auto container lg:px-8 px-5 mt-10 text-white`}
      >
        <form
          action="#"
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-4 justify-center mb-10"
        >
          <div className="flex flex-col gap-4">
            <label className="text-2xl font-semibold">
              Got some new project idea to add to your designer list? <br />
              Add them here one by one.
            </label>
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="Built a scientifical robot..."
              className="border p-3 rounded-md text-black placeholder-gray-600"
              onChange={(e) => {
                setIdeaItem(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-pink-600 hover:bg-pink-700 p-3 text-white lg:mt-20 rounded-md"
            type="submit"
          >
            Add New Idea
          </button>
        </form>
        <TailwindToaster />
      </div>
      <div className="max-w-7xl container lg:px-8 px-5 mx-auto my-4">
        <h2
          className={`${montserrat.className} text-2xl font-bold mb-8 text-white text-center`}
        >
          My Ideas
        </h2>
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-start text-center justify-center items-center gap-4">
          {ideas &&
            ideas.map((item) => (
              <div key={item.$id}>
                <div className="p-4 flex flex-col items-center justify-center border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-4 hover:shadow-lg hover:border-purple-500/40 my-4">
                  <div className="flex p-2 lg:w-80 lg:h-24 text-white">
                    <p className="lg:text-xl text-lg lg:font-medium">
                      {item.proideas}
                    </p>
                  </div>
                  {/* <div className="border-2 border-white w-full"></div> */}
                  <div className="flex flex-row justify-between items-center lg:gap-6 gap-4">
                    <button
                      className="flex flex-row gap-2 text-white font-medium px-8 py-2 text-center border border-pink-800 bg-pink-800 rounded-md"
                      onClick={() => editIdea(item)}
                    >
                      <MdEdit className="text-2xl" /> Edit
                    </button>
                    <button
                      className="flex flex-row gap-2 text-white font-medium px-5 py-2 text-center border border-rose-500 hover:bg-rose-900 rounded-md"
                      onClick={() => {
                        deleteIdea(item.$id);
                      }}
                    >
                      Delete <MdDelete className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {showModalForm && (
            <EditIdeasModal
              closeModal={closeModalForm}
              closeReload={closeAndReload}
              selectedIdea={selectedIdea}
              selectedCategory={category}
            />
          )}
        </div>
      </div>
      <h2
        className={`${montserrat.className} text-3xl font-semibold text-center my-10`}
      >
        List of Design Ideas
      </h2>
      <div className="flex lg:flex-row flex-wrap flex-col justify-center items-center gap-5">
        {prodesigner.map((item, index) => (
          <div
            key={index}
            className="max-w-7xl flex lg:flex-row flex-col justify-center items-center gap-2"
          >
            <IdeaCard key={item} idea={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default DesignerIdeas;
