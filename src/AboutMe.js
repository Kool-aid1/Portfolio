import React from "react";
import "./App.css";
import myPhoto from "./images/kennyPFP.jpg";
import github from "./images/github-logo.png";
import linkedin from "./images/linkedin-logo.png";

function AboutMe() {
  return (
    <section id="aboutMe" className="pt-16">
      <div className="flex flex-col justify-center items-center bg-gray-300 p-6 min-h-screen">
        <header className="text-6xl font-bold mb-4 text-center">
          About Me
        </header>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mt-4">
          <div className="md:flex">
            <div className="md:w-1/2 flex justify-center items-center p-4 bg-white">
              <img
                src={myPhoto}
                alt="Kenny Ly"
                className="rounded-lg shadow-lg object-cover h-full w-full md:w-auto md:h-auto"
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-center items-center">
              <p className="text-lg leading-relaxed">
                &emsp;Hello, my name is Kenny Ly and I am a recent graduate at
                CSUSM with a BS in Software Engineering. I enjoy the different
                mentality of how we have to change the way we think to code.
                Basically thinking like a computer and finding ways to make
                things optimal and simple is what makes coding fun to me. My
                interest in software engineering comes from playing puzzle games
                such as sudoku and minesweeper. To find patterns to solve
                problems makes the game more enticing to me.
              </p>
              <div className="mt-4 flex flex-row">
                <a href="https://github.com/Kool-aid1" className="mt-4 p-2">
                  <img
                    src={github}
                    alt="githublogo"
                    href="https://github.com/Kool-aid1"
                    className="rounded-sm w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/kennytly23/"
                  className="mt-4 p-2"
                >
                  <img
                    src={linkedin}
                    alt="linkedinlogo"
                    href="https://www.linkedin.com/in/kennytly23/"
                    className="rounded-sm w-10 h-10 hover:scale-110"
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
