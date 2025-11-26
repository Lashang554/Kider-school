import React, { useState } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center">
            <i className="fa-solid fa-book text-white text-xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-orange-500">Kider</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/classes"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
            }
          >
            Classes
          </NavLink>

          <NavLink
            to="/pages"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
            }
          >
            Pages
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* Join Button */}
        <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition">
          Join Us →
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
          <NavLink to="/" className="block hover:text-orange-500">Home</NavLink>
          <NavLink to="/about" className="block hover:text-orange-500">About</NavLink>
          <NavLink to="/classes" className="block hover:text-orange-500">Classes</NavLink>
          <NavLink to="/pages" className="block hover:text-orange-500">Pages</NavLink>
          <NavLink to="/contact" className="block hover:text-orange-500">Contact</NavLink>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-full w-full">
            Join Us →
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
