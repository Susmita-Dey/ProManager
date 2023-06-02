import { databases } from '@/appwrite/appwrite';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import IdeaCard from './IdeaCard'
import TailwindToaster from './TailwindToaster';
import { Query } from 'appwrite';
import proideas from '@/data/proideas';
import Loader from './Loader';

function TeacherIdeas(userId) {
    console.info(userId.userId.userId);
    const [ideaItem, setIdeaItem] = useState("")
    const category = "teacher";
    const data = { proideas: ideaItem, category: category, created_by: userId.userId.userId };
    console.log(data);
    const [ideas, setIdeas] = useState()
    const [loader, setLoader] = useState(false)

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_IDEALIST_COLLECTION_ID

    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument(
            databaseId,
            collectionId,
            uuidv4(),
            data,
        )

        console.log(promise);
        promise.then(
            function (response) {
                console.log(response);
                toast.success("Successfully added new project idea!!")
                window.location.reload()
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
                // window.location.reload()
            },
        );
        e.target.reset()
    }

    useEffect(() => {
        setLoader(true)
        const getIdeas = databases.listDocuments(databaseId,
            collectionId,
            [
                Query.equal("created_by", [userId.userId.userId]),
                Query.equal('category', [category])
            ])
        getIdeas.then(
            function (response) {
                setIdeas(response.documents)
                console.log(response.documents);
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
            }
        )
        setLoader(false)
    }, [])

    const deleteIdea = (id) => {
        const promise = databases.deleteDocument(databaseId,
            collectionId, id)
        promise.then(
            function (response) {
                toast.success("Project idea deleted successfully!!")
                console.log(response);
                window.location.reload()
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
                // window.location.reload()
            }
        )
    }

    if (loader) {
        return (
            <Loader />
        );
    }

    return (
        <>
            <div className="max-w-7xl mx-auto container lg:px-8 px-5 mt-10 text-white">
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="flex flex-col lg:flex-row gap-4 justify-center mb-10"
                >
                    <div className='flex flex-col gap-4'>
                        <label className='text-2xl font-semibold'>Got some new project idea to add to your teacher list? <br />Add them here one by one.</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Built a scientifical robot..."
                            className="border p-3 rounded-md text-black placeholder-gray-600"
                            onChange={(e) => {
                                setIdeaItem(e.target.value)
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
                <p className="text-xl font-bold mb-2 text-white">Ideas Tracking List</p>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                    {ideas && ideas.map((item) => (
                        <div key={item.$id} >
                            <div className="p-4 flex flex-col items-center justify-center border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4">
                                <div className='flex p-2 gap-3 border-b-2 border-white text-white'>
                                    <p className='text-xl font-medium'>{item.proideas}</p>
                                </div>
                                <div className='flex hover:bg-pink-900 hover:rounded-md w-full justify-center items-center'>
                                    <span
                                        className="text-white p-2 cursor-pointer"
                                        onClick={() => {
                                            deleteIdea(item.$id)
                                        }}
                                    >
                                        Delete
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div>
                {proideas.map((category) => (
                    <div key={category.category}>
                        <h2 className='text-3xl font-semibold text-center my-10'>{category.category}</h2>
                        <div className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-5">
                            {category.proideas.map((idea) => (
                                <IdeaCard key={idea} idea={idea} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TeacherIdeas