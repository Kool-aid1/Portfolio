import React from "react";

function Skills() {
  return (
    <section id="skills" className="pt-16 bg-gray-100">
      <div className="flex flex-col justify-center items-center p-6 min-h-screen">
        <header className="text-4xl font-bold mb-8 text-center text-gray-800">
          Skills & Tools
        </header>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full p-6">
          <ul className="space-y-6">
            <li>
              <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                <span className="font-bold w-full sm:w-auto text-gray-700">
                  Languages:
                </span>
                <span>Java</span>
                <span>C++</span>
                <span>Python</span>
                <span>C#</span>
                <span>Swift</span>
                <span>HTML/CSS</span>
                <span>Javascript</span>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                <span className="font-bold w-full sm:w-auto text-gray-700">
                  Frameworks/Libraries:
                </span>
                <span>Apache</span>
                <span>Selenium</span>
                <span>Tensorflow</span>
                <span>Keras</span>
                <span>React</span>
                <span>Redux</span>
                <span>Node.js</span>
                <span>Tailwind CSS</span>
                <span>Expo</span>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                <span className="font-bold w-full sm:w-auto text-gray-700">
                  IDE:
                </span>
                <span>Visual Studio Code</span>
                <span>Visual Studio</span>
                <span>Eclipse</span>
                <span>XCode</span>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                <span className="font-bold w-full sm:w-auto text-gray-700">
                  Cloud:
                </span>
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>Microsoft Azure</span>
                <span>IBM Cloud</span>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                <span className="font-bold w-full sm:w-auto text-gray-700">
                  Database:
                </span>
                <span>SQL</span>
                <span>SQLite</span>
                <span>Firebase</span>
                <span>MongoDB</span>
                <span>Supabase</span>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                <span className="font-bold w-full sm:w-auto text-gray-700">
                  Other:
                </span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Jupyter Notebook</span>
                <span>Unity</span>
                <span>Postman</span>
                <span>Heroku</span>
                <span>SnapDragon Spaces</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="pt-20">
          <header className="text-4xl font-bold mb-8 text-center text-gray-800">
            Certifications
          </header>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full p-6">
          <div className="text-center text-lg">
            <span className="font-bold text-gray-700">Coursera:</span>
            <p className="mb-2 text-blue-500 underline hover:text-blue-700">
              <a href="https://www.credly.com/badges/4b27cd17-8caf-4167-9060-7da608b01fe1/linked_in_profile">
                Web Development with HTML, CSS, Javascript
              </a>
            </p>
            <p className="mb-2 text-blue-500 underline hover:text-blue-700">
              <a href="https://www.coursera.org/account/accomplishments/verify/OKUJ7MEUTZQD">
                Introduction to Cloud Computing
              </a>
            </p>
            <p className="mb-2 text-blue-500 underline hover:text-blue-700">
              <a href="https://www.coursera.org/account/accomplishments/verify/GI9H99KZPD5K">
                Getting Started with Git and GitHub
              </a>
            </p>
            <p className="mb-2 text-blue-500 underline hover:text-blue-700">
              <a href="https://www.coursera.org/account/accomplishments/verify/2EWJU1RA4GCC">
                Developing Front-End Apps with React
              </a>
            </p>
          </div>
          <div className="text-center mt-5 text-lg">
            <div className="flex flex-wrap justify-center space-x-4">
              <span className="font-bold text-gray-700">CompTIA:</span>
              <span>Security+ (currently working on)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
