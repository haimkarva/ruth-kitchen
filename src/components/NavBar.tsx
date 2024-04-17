import React from "react";
import Link from "next/link";
import Logo from "../../public/LOGO-WITHOUT-BG.png";
import Image from "next/image";
import Menu from "./Menu";

const leftLinks = [
  {
    title: "Home",
    path: "/",
    active: false,
  },
  {
    title: "About",
    path: "/about",
    active: false,
  },
  {
    title: "Menu",
    path: "/menu",
    active: false,
  },
];
const rightLinks = [
  {
    title: "Gallery",
    path: "/gallery",
    active: false,
  },
  {
    title: "Contact",
    path: "/contact",
    active: false,
  },
];
const NavBar = () => {
  return (
    <div className="h-24 text-green-500 p-4  flex justify-between items-center  uppercase  md:h-24 lg:px-20 xl:px-40">
      <div className="md:hidden cursor-pointer">
        <Image src="/phone.png" alt="phone icon" width={40} height={40} />
      </div>
      <div className="hidden md:flex justify-center gap-10 flex-1 font-bold">
        {leftLinks.map((item) => (
          <Link key={item.title} href={item.path} className="hover:bg-white">
            {item.title}
          </Link>
        ))}
      </div>
      <div className=" hidden md:block mr-20">
        <Link href="/">
          <div className="relative">
            <Image
              src={Logo}
              alt="ruth kitchen logo"
              width={240}
              height={240}
              className="object-contain p-10"
            />
          </div>
        </Link>
      </div>
      <div className="  md:hidden">
        <Link href="/">
          <div className="relative">
            <Image
              src={Logo}
              alt="ruth kitchen logo"
              width={200}
              height={200}
              className="object-contain p-12"
            />
          </div>
        </Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-10 flex-1 font-bold">
        {rightLinks.map((item) => (
          <Link key={item.title} href={item.path} className="hover:bg-white">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
