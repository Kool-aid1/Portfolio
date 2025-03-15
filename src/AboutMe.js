import React from "react";
import "./App.css";
import myPhoto from "./images/kennyPFP.jpg";
import github from "./images/github-logo.png";
import linkedin from "./images/linkedin-logo.png";

function AboutMe() {
  return (
    <section id="aboutMe" className="pt-16 bg-gray-100">
      <div className="flex flex-col justify-center items-center p-6 min-h-screen">
        <header className="text-4xl font-bold mb-8 text-center text-gray-800">
          About Me
        </header>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
          <div className="md:flex">
            <div className="md:w-1/2 flex justify-center items-center p-4 bg-gray-200">
              <img
                src={myPhoto}
                alt="Kenny Ly"
                className="rounded-full shadow-md object-cover h-64 w-64 md:h-auto md:w-auto"
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Hello, my name is Kenny Ly and I am a recent graduate from CSUSM
                with a BS in Software Engineering. I enjoy the different
                mentality of how we have to change the way we think to code.
                Thinking like a computer and finding ways to make things optimal
                and simple is what makes coding fun to me. My interest in
                software engineering comes from playing puzzle games such as
                Sudoku and Minesweeper. Finding patterns to solve problems makes
                the game more enticing to me.
              </p>
              <div className="mt-6 flex space-x-4 justify-center">
                <a href="https://github.com/Kool-aid1" className="p-2">
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/kennytly23/"
                  className="p-2"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
