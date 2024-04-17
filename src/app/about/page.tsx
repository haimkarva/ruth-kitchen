import React from "react";
import Title from "@/components/Title";

const AboutPage = () => {
  return (
    <div className="  w-full h-100 bg-[url('/public/cookies.jpg')]">
      <div className="">
        <Title text="about us" />
        <div className="flex flex-col justify-between gap-5 text-center mx-96 mt-20">
          <div className="p-8 border-8 border-green-400 flex flex-col justify-between	">
            <h2 className="text-3xl">Past</h2>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt, maxime molestias veniam aliquam officiis dolorum
              architecto deleniti obcaecati nihil dolore numquam officia magnam,
              accusantium recusandae eos ab quidem aliquid in, velit cupiditate
              tenetur. Ut, perspiciatis! Nostrum harum impedit possimus quis
              iure? Doloribus blanditiis dicta quas. Beatae vel repellat nisi
              aperiam animi, harum consectetur temporibus eveniet dicta expedita
              odit quo consequatur minima tempora quam, deleniti inventore magni
              nobis error suscipit corrupti cumque sed. Qui cum atque assumenda
              repellat tempora voluptatibus nemo ullam velit pariatur similique
              iusto ratione ipsa commodi facilis, eligendi fugiat nulla,
              corrupti modi officiis animi necessitatibus ex totam amet.
            </p>
          </div>
          <div className="p-4 border-8 border-green-400">
            <h2 className="text-3xl">Today</h2>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt, maxime molestias veniam aliquam officiis dolorum
              architecto deleniti obcaecati nihil dolore numquam officia magnam,
              accusantium recusandae eos ab quidem aliquid in, velit cupiditate
              tenetur. Ut, perspiciatis! Nostrum harum impedit possimus quis
              iure? Doloribus blanditiis dicta quas. Beatae vel repellat nisi
              aperiam animi, harum consectetur temporibus eveniet dicta expedita
              odit quo consequatur minima tempora quam, deleniti inventore magni
              nobis error suscipit corrupti cumque sed. Qui cum atque assumenda
              repellat tempora voluptatibus nemo ullam velit pariatur similique
              iusto ratione ipsa commodi facilis, eligendi fugiat nulla,
              corrupti modi officiis animi necessitatibus ex totam amet.
            </p>
          </div>
          <div className="p-4 border-8 border-green-400">
            <h2 className="text-3xl">Tommorow</h2>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt, maxime molestias veniam aliquam officiis dolorum
              architecto deleniti obcaecati nihil dolore numquam officia magnam,
              accusantium recusandae eos ab quidem aliquid in, velit cupiditate
              tenetur. Ut, perspiciatis! Nostrum harum impedit possimus quis
              iure? Doloribus blanditiis dicta quas. Beatae vel repellat nisi
              aperiam animi, harum consectetur temporibus eveniet dicta expedita
              odit quo consequatur minima tempora quam, deleniti inventore magni
              nobis error suscipit corrupti cumque sed. Qui cum atque assumenda
              repellat tempora voluptatibus nemo ullam velit pariatur similique
              iusto ratione ipsa commodi facilis, eligendi fugiat nulla,
              corrupti modi officiis animi necessitatibus ex totam amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
