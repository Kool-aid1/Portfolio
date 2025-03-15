import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-800 text-white fixed top-0 w-full z-10 shadow-md">
      <nav className="h-16 flex items-center justify-between px-6">
        <div className="flex items-center">
          <p className="font-bold text-xl">Kenny Ly</p>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a
            href="#aboutMe"
            className="hover:text-gray-300 transition duration-300"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="hover:text-gray-300 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-gray-300 transition duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-gray-300 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 px-6 pt-2 pb-4 bg-zinc-800 text-white">
          <a
            href="#aboutMe"
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
