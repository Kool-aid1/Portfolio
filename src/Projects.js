import React from "react";

function Projects() {
  return (
    <section id="projects" className="pt-16 bg-gray-100">
      <div className="flex flex-col justify-center items-center p-6 min-h-screen">
        <header className="text-4xl font-bold mb-8 text-center text-gray-800">
          Projects
        </header>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full p-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              HausOps (Mobile Application)
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Developing a cross-platform solution in React, Python, and Expo
                on a secure server, streamlining data flow and user experience.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              VizTrace (Networking Project)
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Developed a GUI-based trace route program to visualize packet
                paths and geolocate IP addresses using Python, Scapy, GeoIP2,
                and MaxMind DB Reader.
              </li>
              <li>
                Designed a web-based frontend with HTML, Flask, and Flask-CORS
                to display results on an interactive map, utilizing
                Npcap/libpcap for packet capture.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Emotional Support Animals
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Created a webpage educating users about emotional support
                animals, featuring a quiz to recommend the best animal choice
                based on user responses using HTML, CSS, JavaScript, and PHP.
              </li>
              <li>
                Integrated Google Maps API to help users find nearby animal
                adoption services.
              </li>
              <li>
                Used PHP to store quiz questions and implement a point system
                for determining optimal animal matches.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Milo - Nutrition Tracker and Fitness Application
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                A Java application that uses JavaFX and calls a Food Database
                API to grab data to calculate calories.
              </li>
              <li>
                The program is designed to build a workout regime based on user
                preferences as well as calculating BMI, body fat, and
                Calorie/Protein tracking.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
