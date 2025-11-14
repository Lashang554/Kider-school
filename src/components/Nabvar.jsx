import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo with Font Awesome Icon */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center">
            <i className="fa fa-book-reader text-white text-xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-orange-500">Kider</h1>
        </div>

        {/* Menu Links */}
        <nav >
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "" : ""} hover:text-orange-500 cursor-pointer`}><li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? "" : ""} hover:text-orange-500 cursor-pointer`}><li>About</li>
          </NavLink>
          <NavLink
            to="/classes"
            className={({ isActive }) => `${isActive ? "" : ""} hover:text-orange-500 cursor-pointer`}><li>Classes</li>
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) => `${isActive ? "" : ""} hover:text-orange-500 cursor-pointer`}><li>Pages</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? "" : ""} hover:text-orange-500 cursor-pointer`}><li>Contact</li>
          </NavLink>       
          </ul>
          </nav>

        {/* Join Button */}
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition">
          Join Us →
        </button>
      </div>
    </div>
  );
};

export default Navbar;
