"use client";
import React from "react";
import Image from "next/image";

interface CardProps {
  id: string;
  name?: string;
  path?: string;
  onChangeImg: (id: string) => void;
}
const Card: React.FC<CardProps> = ({ id, name, path, onChangeImg }) => {
  return (
    <li
      className=" rounded-lg border-4 border-gray-500 shadow-lg md:h-36 md:w-36"
      onMouseEnter={() => onChangeImg(id)}
    >
      <Image
        src={`${path}`}
        width={400}
        height={400}
        alt="123"
        className=" object-fit aspect-square grayscale hover:grayscale-0 p-5"
      />

      {/* <h1 className="text-2xl">Carusoun</h1> */}
    </li>
  );
};

export default Card;
