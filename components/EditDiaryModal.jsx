import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import DiaryNoteForm from './DiaryNoteForm'

function EditDiaryModal({ documentId, closeModalForm }) {

    return (
        <div>
            <div className="max-w-7xl mx-auto container lg:px-8 px-5 mt-10">
                <div className='fixed inset-0 bg-opacity-50 flex flex-col justify-center items-center'>
                    <div className='bg-white rounded-lg p-6 text-pink-600'>
                        <div className='flex flex-row justify-between mb-4 items-center gap-5'>
                            <h2 className={`${montserrat.className} text-xl font-bold`}>Edit Note</h2>
                            <RxCross2 className="text-xl font-bold relative top-0 right-0 hover:text-pink-600 hover:scale-150 text-gray-900 cursor-pointer w-6 h-6" onClick={closeModalForm} />
                        </div>
                        <DiaryNoteForm documentId={documentId} buttonTitle={'Save'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditDiaryModal