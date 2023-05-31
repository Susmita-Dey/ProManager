import { storage } from '@/appwrite/appwrite';
import React from 'react';

const DiaryCard = ({ imageFileId, diaryTitle, diaryNote }) => {
    // Generate the image URL using the file ID
    const imageUrl = storage.getFilePreview("64660501997e9ab009e4", imageFileId, 150, 150, "center", 100);

    return (
        <div className='flex flex-col justify-center items-center flex-wrap'>
            {imageUrl ? (
                <div className='flex p-2 border-2 border-white text-white'>
                    <img src={imageUrl} alt="Card Image" />
                </div>
            ) : (
                <div className='flex p-2 border-2 border-white text-white'>
                    <Image width={100} height={100} src={"https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_1280.jpg"} className='w-full h-full' />
                </div>
            )
            }
            <div className='flex p-2 border-b-2 border-white text-white'>
                <p className='text-xl font-medium'>{diaryTitle}</p>
            </div>
            <div className='flex p-2 border-b-2 border-white text-white'>
                <p className='text-base'>{diaryNote}</p>
            </div>

        </div>
    );
};

export default DiaryCard;
