import React from "react";
import "./App.css";

function App() {
  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <div id="projects" className="pt-20">
        <header className="text-center text-3xl font-bold mb-8">
          Projects
        </header>
        <div className="max-w-4xl mx-auto p-4">
          <header className="text-center text-xl font-semibold mb-4">
            HausOps (Mobile Application)
          </header>
          <ul className="list-disc list-inside text-left">
            <li>
              Developing a cross-platform solution in React, Python, and Expo on
              a secure server, streamlining data flow and user experience
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <header className="text-center text-xl font-semibold mb-4">
            VizTrace (Networking Project)
          </header>
          <ul className="list-disc list-inside text-left">
            <li>
              Developed a GUI-based trace route program to visualize packet
              paths and geolocate IP addresses using Python, Scapy, GeoIP2, and
              MaxMind DB Reader.
            </li>
            <li>
              Designed a web-based frontend with HTML, Flask, and Flask-CORS to
              display results on an interactive map, utilizing Npcap/libpcap for
              packet capture.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <header
            className="text-center text-xl font-semibold mb-4"
            hover="text-xxl"
          >
            Emotional Support Animals
          </header>
          <ul className="list-disc list-inside text-left">
            <li>
              Created a webpage educating users about emotional support animals,
              featuring a quiz to recommend the best animal choice based on user
              responses using HTML, CSS, JavaScript, and PHP.
            </li>
            <li>
              Integrated Google Maps API to help users find nearby animal
              adoption services.
            </li>
            <li>
              Used PHP to store quiz questions and implement a point system for
              determining optimal animal matches.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <header className="text-center text-xl font-semibold mb-4">
            Milo - Nutrition Tracker and Fitness Application
          </header>
          <ul className="list-disc list-inside text-left">
            <li>
              A java application that uses JavaFx and calls a Food Database API
              to grab data to calculate calories
            </li>
            <li>
              The program is designed build a workout regime based on user’s
              preference as well as calculating BMI, body fat, and
              Calorie/Protein tracking
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
