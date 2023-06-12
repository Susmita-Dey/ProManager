import { montserrat } from "@/context/fonts";
import Image from "next/image";
import React from "react";

function NoItems({ title, subtitle }) {
  return (
    <div className="max-w-7xl container mx-auto lg:px-8 px-5 my-16">
      <h2
        className={`${montserrat.className} text-2xl font-bold mb-8 text-white`}
      >
        {title}
      </h2>
      <div className="flex flex-col text-center justify-center items-center">
        <Image
          src={"/nothing.svg"}
          width={0}
          height={0}
          alt="searching-gif"
          className="w-1/2 h-1/2 lg:w-1/4 lg:h-1/4 animate-waving-hand"
        />
        <p className="text-lg italic">{subtitle}</p>
      </div>
    </div>
  );
}

export default NoItems;
