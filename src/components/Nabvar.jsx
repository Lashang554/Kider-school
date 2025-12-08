import React, { useState } from "react";
import { NavLink, Link } from "react-router";
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
           {/* Dropdown */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-orange-500 font-medium">
              Pages
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <div className="absolute left-0 mt-2 bg-white w-48 rounded-lg shadow-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/facility" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">School Facilities</Link>
              <Link to="/team" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">Popular Teachers</Link>
              <Link to="/call-to-action" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">Become A Teacher</Link>
              <Link to="/appointment" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">Make Appointment</Link>
              <Link to="/testimonial" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">Testimonial</Link>
              <Link to="/404" className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-b-lg">404 Error</Link>
            </div>
          </div>

          

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
          <NavLink to="/" className="block hover:text-orange-500" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="block hover:text-orange-500" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/classes" className="block hover:text-orange-500" onClick={() => setOpen(false)}>Classes</NavLink>
          
          {/* Mobile Dropdown */}
          <div className="space-y-2">
            <NavLink to="/pages" className="block hover:text-orange-500 font-semibold">Pages</NavLink>
            <div className="pl-4 space-y-2 border-l-2 border-orange-100">
              <Link to="/facility" className="block hover:text-orange-500" onClick={() => setOpen(false)}>School Facilities</Link>
              <Link to="/team" className="block hover:text-orange-500" onClick={() => setOpen(false)}>Popular Teachers</Link>
              <Link to="/call-to-action" className="block hover:text-orange-500" onClick={() => setOpen(false)}>Become A Teacher</Link>
              <Link to="/appointment" className="block hover:text-orange-500" onClick={() => setOpen(false)}>Make Appointment</Link>
              <Link to="/testimonial" className="block hover:text-orange-500" onClick={() => setOpen(false)}>Testimonial</Link>
              <Link to="/404" className="block hover:text-orange-500" onClick={() => setOpen(false)}>404 Error</Link>
            </div>
          </div>
          
          <NavLink to="/contact" className="block hover:text-orange-500" onClick={() => setOpen(false)}>Contact</NavLink>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-full w-full">
            Join Us →
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
