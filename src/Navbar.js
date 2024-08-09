import React, {useState} from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="bg-zinc-400 h-16 fixed top-0 w-full z-10">
        <nav className="h-full flex items-center justify-between px-6 border-b border-gray-500">
          <div>
            <p className="font-bold text-lg"> Kenny Ly </p>
          </div>
          <div className="flex space-x-6 text-sm font-bold">
            <a href="#aboutMe">About Me</a>
            <div className="relative">
              <button 
                onClick={toggleDropDown}
                className="focus:outline-none"
              >
                Experience!
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg">
                  <a 
                    href="#technicalExperience"
                    className="block px-1 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    Technical Experience
                  </a>
                  <a 
                    href="#otherExperience"
                    className="block px-1 py-2 text-sm text-gray-700 hover:bg-gray-200"
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
