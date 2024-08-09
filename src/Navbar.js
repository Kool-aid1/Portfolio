import React, { useState } from "react";

function Navbar() {
  return (
    <div>
      <header className="bg-zinc-400 h-16 fixed top-0 w-full z-10">
        <nav className="h-full flex items-center justify-between px-6 border-b border-gray-500 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center flex-shrink-0">
            <p className="font-bold text-lg p-4"> Kenny Ly </p>
          </div>
          <div className="flex space-x-6 text-sm font-bold">
            <a href="#aboutMe">About Me</a>
            <a href="#experience">Experience</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
