import React, { useEffect, useState } from 'react'
import { databases } from '@/appwrite/appwrite'
import { Query } from 'appwrite'
import toast from 'react-hot-toast'
import TailwindToaster from './TailwindToaster'
import Loader from './Loader'

function TipsList(userId) {
    const [tipsList, setTipsList] = useState()
    const [loader, setLoader] = useState(false)

    // console.log(userId.userId);
    useEffect(() => {
        setLoader(true)
        const getTipsList = databases.listDocuments("646605464de2f5cb7435", "646605ece1eec67da04a", [
            Query.equal("created_by", [userId.userId])])
        getTipsList.then(
            function (response) {
                setTipsList(response.documents)
                console.log(response.documents);
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
            }
        )
        setLoader(false)
    }, [])

    const deleteTips = (id) => {
        const promise = databases.deleteDocument("646605464de2f5cb7435", "646605ece1eec67da04a", id)
        promise.then(
            function (response) {
                toast.success("Productivity tip deleted successfully!!")
                console.log(response);
                window.location.reload()
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
                window.location.reload()
            }
        )
    }

    if (loader) {
        return (
            <Loader />
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold mb-2 text-white">My Productivity Tips</h3>
            <div>
                {tipsList && tipsList.map(item => (
                    <div key={item.$id} >
                        <div className="p-4 flex items-center justify-between border-b bg-gradient-to-b px-4 pb-6 pt-8 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 gap-2 hover:shadow-lg hover:border-pink-500/40 my-4">
                            <div>
                                <p className='text-lg font-medium text-white'>{item.tips}</p>
                            </div>
                            <div>
                                <span
                                    className="text-white cursor-pointer"
                                    onClick={() => {
                                        deleteTips(item.$id)
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
            <TailwindToaster />
        </div>
    )
}

export default TipsList