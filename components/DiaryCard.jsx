import { storage } from "@/appwrite/appwrite";
import Image from "next/image";
import React from "react";

const DiaryCard = ({ imageFileId, diaryTitle, diaryNote }) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;

  //   alert(diaryNote);

  // Generate the image URL using the file ID
  const imageUrl = storage.getFilePreview(
    bucketId,
    imageFileId,
    150,
    150,
    "center",
    100
  );

  return (
    <div
      className={`flex flex-col justify-center items-center lg:w-96 w-full text-center flex-wrap gap-2`}
    >
      {imageFileId ? (
        <div className="flex p-2 border-2 border-white text-white">
          <img src={imageUrl} width={150} height={150} alt="Card Image" />
        </div>
      ) : (
        <div className="flex p-2 border-2 border-white text-white">
          <Image
            width={150}
            height={150}
            src={
              "https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_1280.jpg"
            }
            className="w-full h-full"
            alt="Card Image"
          />
        </div>
      )}
      <div className="flex p-2 text-white">
        <p className="md:text-xl font-medium">{diaryTitle}</p>
      </div>
      <span className="border-2 border-white w-full"></span>
      <div className="flex p-2 text-white">
        <p className="text-base">{diaryNote}</p>
      </div>
    </div>
  );
};

export default DiaryCard;
