import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="bg-secondary bg-opacity-80 backdrop-blur-[10px] rounded-full m-auto my-4 p-1 border-accent border-[1px] flex text-text justify-center w-fit md:text-sm fixed top-2 left-1/2 transform -translate-x-1/2 z-50">
      {links.map((link) => (
        <NavLink
          to={link.link}
          key={link.link}
          className={({ isActive }) =>
            isActive ? "inline-flex items-center gap-2 justify-center duration-300 font-medium transition-colors bg-gradient-to-r from-blue-600/10 to-blue-600/30 hover:bg-blue-600/10 rounded-full px-5 py-3 text-sm" : "px-5 py-3 font-medium text-sm"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
