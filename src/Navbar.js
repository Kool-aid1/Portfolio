import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="bg-zinc-400 h-16 fixed top-0 w-full z-10">
        <nav className="h-full flex items-center justify-between px-6 border-b border-gray-500 whitespace-nowrap">
          <div className="flex items-center flex-shrink-0">
            <p className="font-bold text-lg p-4"> Kenny Ly </p>
          </div>
          <div className="flex space-x-6 text-sm font-bold">
            <a href="#aboutMe">About Me</a>
            <div className="relative inline-block">
              <button onClick={toggleDropDown} className="focus:outline-none">
                Experience
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg">
                  <a
                    href="#technicalExperience"
                    className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    Technical Experience
                  </a>
                  <a
                    href="#otherExperience"
                    className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    Other Experience
                  </a>
                </div>
              )}
            </div>

            <a href="#Projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#Contact">Contact</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
