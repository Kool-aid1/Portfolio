import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-zinc-400 h-16 fixed top-0 w-full z-10">
        <nav className="h-full flex items-center justify-between px-6 border-b border-gray-500">
          <div className="flex items-center flex-shrink-0">
            <p className="font-bold text-lg p-4"> Kenny Ly </p>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-bold">
            <a href="#aboutMe">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
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
          <div className="md:hidden flex flex-col items-center space-y-2 px-6 pt-2 text-md font-bold bg-zinc-400 border-b border-gray-500">
            <a href="#aboutMe" className="py-2">About Me</a>
            <a href="#skills" className="py-2">Skills</a>
            <a href="#experience" className="py-2">Experience</a>
            <a href="#Projects" className="py-2">Projects</a>
            <a href="#Contact" className="py-2">Contact</a>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
