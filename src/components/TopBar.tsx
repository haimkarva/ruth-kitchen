import React from "react";
import Notifications from "./Notifications";
import NavBar from "./NavBar";

const TopBar = () => {
  return (
    <div className=" h-36 bg-yellow-300 text-black-500  border-b-2 border-b-green-500  md:h-40 ">
      <Notifications />
      <NavBar />
    </div>
  );
};

export default TopBar;
