"use client";
import React, { useState } from "react";
import Title from "@/components/Title";
import Card from "@/components/card";
import { images } from "../data";

const ContactPage = () => {
  const [img, setImg] = useState(images[0]);
  const changeImage = (id: string) => {
    setImg(images[Number(id) - 1]);
  };

  return (
    <div className="min-h-screen  bg-purple-500">
      <Title text="Contact" />
      <div className="flex max-w-4xl mx-auto p-10">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-2">
          {/* {images.map((image) => (
            <Card
              key={image.id}
              id={image.id}
              name={image.title}
              path={image.path}
              onChangeImg={changeImage}
            />
          ))} */}
          <li className="bg-white rounded-lg shadow-xl ">
            <div className="h-96 w-36"></div>
          </li>
          <li className="bg-white rounded-lg shadow-xl ">
            <div className="h-96 w-36"></div>
          </li>
          <li className="bg-white rounded-lg shadow-xl ">
            <div className="h-96 w-36"></div>
          </li>
          <li className="bg-white rounded-lg shadow-xl ">
            <div className="h-96 w-36"></div>
          </li>
          <li className="bg-white rounded-lg shadow-xl ">
            <div className="h-96 w-36"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
