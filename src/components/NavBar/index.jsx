import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ticket Bazaar
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
