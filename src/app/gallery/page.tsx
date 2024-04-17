"use client";
import React, { useState } from "react";
import Title from "@/components/Title";
import { images } from "../data";
import Image from "next/image";
import Card from "@/components/card";
import ImageContainer from "@/components/ImageContainer";

const GalleryPage = () => {
  const [img, setImg] = useState(images[0]);

  const changeImage = (id: string) => {
    setImg(images[Number(id) - 1]);
  };
  return (
    <div className="w-full min-h-screen bg-yellow-500 ">
      <Title text="Gallery" />
      <div className=" lg:px-20 xl:px-40   md:gap-8  flex flex-col items-center  text-green-500 md:flex-row ">
        <ul className=" w-1/3 grid md:grid-cols-3 p-4 gap-y-3    border-8 rounded-xl border-red-500 ">
          {images.map((image) => (
            <Card
              key={image.id}
              id={image.id}
              name={image.title}
              path={image.path}
              onChangeImg={changeImage}
            />
            // <li className="h-24 w-36">
            //   <div className="h-24 w-36 bg-green-500"></div>
            // </li>
          ))}
        </ul>
        <div className="w-full p-12">
          <ImageContainer url={img.path} name={img.title} />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
