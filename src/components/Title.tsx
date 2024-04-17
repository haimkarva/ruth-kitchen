import React from "react";

interface TitleProps {
  text: string;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="p-12">
      <h1 className="uppercase text-4xl text-center">{text}</h1>
    </div>
  );
};

export default Title;
