import React, { useState } from "react";
import weath_img from "../assets/w_img.png";
import chat_img from "../assets/ChatAppimg.png";

export default function Project() {
  const [selectedImage, setSelectedImage] = useState(null);

  const skills = [
    "Javascript(ES6+)",
    "Html5",
    "CSS3",
    "ReactJs",
    "Tailwind CSS",
    "NodeJs",
    "ExpressJs",
    "Github",
    "MongoDB",
    "MySql",
    "Java",
    "RestAPI",
  ];

  const projects = {
    Weather_Project: {
      Name: "Weather Forcast App",
      Code: "https://github.com/Kavin-U/WeatherAPP",
      Demo: "https://weather-application-csy8.onrender.com",
      image: weath_img,
      Description:
        "A simple API Project with nodejs backend server using Weather Api to search location based weather forcasting and also has location access to detect the location and provide weather details",
    },
    ChatRoom_project: {
      Name: "ChatRoom Application",
      Code: "https://github.com/Kavin-U/Chat-Application",
      Demo: "NO DEMO",
      image: chat_img,
      Description:
        "This is a simple practicing Fullstack Web Application with simple chatroom with users and messages in rooms using backend environments like NodeJs,ExpressJs,RestfulAPI's,MongoDB, etc..,",
    },
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="mb-40">
      <h1 className="text-2xl uppercase text-center">Skills and Projects</h1>
      <div>
        <ul className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex flex-col gap-10">
        <h1 className="text-xl">Some of my projects</h1>
        {Object.entries(projects).map(([key, project]) => (
          <div
            id={key}
            key={key}
            className="flex w-[95%] gap-5 p-4 bg-gray-800"
          >
            <img
              src={project.image}
              alt="project_img"
              className="w-[200px] h-[200px] cursor-pointer"
              onClick={() => setSelectedImage(project.image)} // Open the modal with the image
            />
            <div>
              <div className="flex gap-3 mb-4">
                <a
                  href={project.Code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md border-blue-500 border-2 hover:bg-blue-500 hover:text-black"
                >
                  CODE
                </a>
                {project.Demo !== "NO DEMO" ? (
                  <a
                    href={project.Demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md border-blue-500 border-2 hover:bg-blue-500 hover:text-black"
                  >
                    DEMO
                  </a>
                ) : (
                  <a
                    href={(e) => {
                      e.preventDefault();
                    }}
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md"
                  >
                    NO DEMO FOR NOW
                  </a>
                )}
              </div>
              <p>
                <strong>Project Name:</strong> {project.Name}
              </p>
              <p>
                <strong>Description:</strong> {project.Description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full-size"
              className="max-w-[90vw] max-h-[90vh] rounded"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full p-2 hover:bg-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
