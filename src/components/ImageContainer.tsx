"use client";
import Image from "next/image";
import React from "react";

interface ImageProps {
  url: string;
  name: string;
}
const ImageContainer: React.FC<ImageProps> = ({ url, name }) => {
  return (
    <div className=" relative overflow-hidden items-center flex flex-col justify-between  md:w-full md:h-full">
      <Image
        src={`${url}`}
        alt="image"
        width={650}
        height={650}
        className="z-10 object-fit aspect-square  rounded-2xl"
      />
      <div className=" z-20 absolute top-20  bg-gray-500 h-24 w-[calc(100%-40rem)] opacity-0 hover:opacity-100">
        <p className=" absolute top-10 left-64 bg-gray-500 text-4xl text-white">
          {name}
        </p>
      </div>
      {/* <p className="absolute bottom-0 left-72   text-center mx-auto text-3xl text-white uppercase bg-gray-500">
        {name}
      </p> */}
    </div>
  );
};

export default ImageContainer;
