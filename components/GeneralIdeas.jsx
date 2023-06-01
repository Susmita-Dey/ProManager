import { databases } from '@/appwrite/appwrite';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import IdeaCard from './IdeaCard'
import TailwindToaster from './TailwindToaster';
import { Query } from 'appwrite';
import proideas from '@/data/proideas';

function GeneralIdeas(userId) {
    console.info(userId.userId.userId);
    const [ideaItem, setIdeaItem] = useState("")
    const category = "general";
    const data = { proideas: ideaItem, category: category, created_by: userId.userId.userId };
    console.log(data);
    const [ideas, setIdeas] = useState()
    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument(
            "646605464de2f5cb7435",
            "64744e13bc6fdbd44a94",
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
        const getIdeas = databases.listDocuments("646605464de2f5cb7435", "64744e13bc6fdbd44a94",
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
        const promise = databases.deleteDocument("646605464de2f5cb7435", "64744e13bc6fdbd44a94", id)
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

    return (
        <>
            <div className="max-w-7xl mx-auto container lg:px-8 px-5 mt-10 text-white">
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="flex flex-col lg:flex-row gap-4 justify-center mb-10"
                >
                    <div className='flex flex-col gap-4'>
                        <label className='text-2xl font-semibold'>Got some new project idea to add to your general list? <br />Add them here one by one.</label>
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
                {loader ? (
                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin text-pink-800 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only text-white">Loading...</span>
                    </div>
                ) : (
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
                )}
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

export default GeneralIdeas