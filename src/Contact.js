import React from "react";

function Contact({ togglePopup }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
          Contact Information
        </h2>
        <p className="mb-2 text-gray-700 text-center">
          Email: ktly23@yahoo.com
        </p>
        <p className="mb-4 text-gray-700 text-center">Phone: (858) 232-8884</p>
        <div className="flex justify-center">
          <button
            onClick={togglePopup}
            className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
