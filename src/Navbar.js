import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false); // State for contact popup

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

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
          <button
            onClick={toggleContact}
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </button>
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
          <button
            onClick={toggleContact}
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            Contact
          </button>
        </div>
      )}
      {contactOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Contact Information
            </h2>
            <p className="mb-2 text-gray-700">Email: ktly23@yahoo.com</p>
            <p className="mb-4 text-gray-700">Phone: (858) 232-8884</p>
            <button
              onClick={toggleContact}
              className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
