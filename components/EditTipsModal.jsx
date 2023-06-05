import { databases } from '@/appwrite/appwrite'
import { montserrat } from '@/context/fonts'
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import TailwindToaster from './TailwindToaster'

function EditTipsModal({ closeModal, documentId, tipval, userId }) {
    const [tipsItem, setTipsItem] = useState("")
    const data = { tips: tipsItem, created_by: userId };
    console.log(data);

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PROTIPS_COLLECTION_ID

    const editTips = (id) => {
        const promise = databases.updateDocument(databaseId,
            collectionId, id, data)
        promise.then(
            function (response) {
                toast.success("Productivity tip updated successfully!!")
                console.log(response);
                // window.location.reload()
            },
            function (error) {
                toast.error(error.message)
                console.log(error);
            }
        )
    }

    return (
        <div>
            <div className='fixed inset-0 z-50 bg-opacity-50 flex flex-col justify-center items-center'>
                <div className='bg-white rounded-lg p-6 text-pink-600'>
                    <div className='flex flex-row justify-between mb-4 items-center gap-5'>
                        <h2 className={`${montserrat.className} text-xl font-bold`}>Add Note</h2>
                        <RxCross2 className="text-xl font-bold relative top-0 right-0 hover:text-pink-600 hover:scale-150 text-gray-900 cursor-pointer w-6 h-6" onClick={closeModal} />
                    </div>
                    <form
                        action=""
                        className="flex flex-col lg:flex-row gap-4 justify-center mb-10"
                    >
                        <div className='flex w-1/2 flex-col gap-4'>
                            {/* <label className='text-lg font-semibold'>Learnt some new productivity tips/tricks? Add them here one by one.</label> */}
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder={tipval}
                                className="border p-3 rounded-md text-black placeholder-gray-600"
                                onChange={(e) => {
                                    setTipsItem(e.target.value)
                                }}
                            />
                        </div>
                        <button
                            className="bg-pink-600 hover:bg-pink-700 px-3 py-2 text-white rounded-md"
                            type="submit"
                            onClick={() => {
                                editTips(documentId)
                            }}
                        >
                            Update Tip
                        </button>
                    </form>
                    <TailwindToaster />
                </div>
            </div>
        </div>
    )
}

export default EditTipsModal