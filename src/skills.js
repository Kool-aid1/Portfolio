import React, { useState } from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="flex bg-gray-300 justify-center items-center min-h-screen px-4"
    >
      <div>
        <div>
          <header className="text-center text-2xl font-bold">Skills & Tools</header>
        </div>
        <div className="text-center mt-5">
          <ul className="space-y-4">
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mt-2">
              <li className="font-bold w-full sm:w-auto">Languages:</li>
              <li>Java</li>
              <li>C++</li>
              <li>Python</li>
              <li>C#</li>
              <li>HTML/CSS</li>
              <li>Javascript</li>
            </ul>
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mt-2">
              <li className="font-bold w-full sm:w-auto">Frameworks/Libraries:</li>
              <li>Apache</li>
              <li>Selenium</li>
              <li>Tensorflow</li>
              <li>Keras</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Tailwind CSS</li>
            </ul>
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mt-2">
              <li className="font-bold w-full sm:w-auto">IDE:</li>
              <li>Visual Studio Code</li>
              <li>Visual Studio</li>
              <li>Eclipse</li>
            </ul>
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mt-2">
              <li className="font-bold w-full sm:w-auto">Cloud:</li>
              <li>AWS</li>
              <li>Google Cloud</li>
              <li>Microsoft Azue</li>
              <li>IBM Cloud</li>
            </ul>
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mt-2">
              <li className="font-bold w-full sm:w-auto">Database:</li>
              <li>SQL</li>
              <li>SQL Lite</li>
              <li>Firebase</li>
              <li>Mongo DB</li>
            </ul>
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mt-2">
              <li className="font-bold w-full sm:w-auto">Other:</li>
              <li>Git</li>
              <li>Jupyter Notebook</li>
              <li>Unity</li>
              <li>Postman</li>
              <li>Heroku</li>
              <li>SnapDragon Spaces</li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
