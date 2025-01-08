import React, { useState } from "react";
import weath_img from "../assets/w_img.png";
import chat_img from "../assets/ChatAppimg.png";
import { CiShare1 } from "react-icons/ci";

export default function Project() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const skills = [
    "Javascript(ES6+)",
    "Html5",
    "CSS3",
    "ReactJs",
    "Tailwind CSS",
    "NodeJs",
    "ExpressJs",
    "Redux",
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
        "A simple API project with a Node.js backend server that uses a Weather API to provide location-based weather forecasting. It also includes location access to automatically detect the user's location and display the corresponding weather details.",
    },
    ChatRoom_project: {
      Name: "ChatRoom Application",
      Code: "https://github.com/Kavin-U/Chat-Application",
      Demo: "NO DEMO",
      image: chat_img,
      Description:
        "This is a simple practice full-stack web application featuring a chatroom where users can send messages in different rooms. It is built using backend technologies such as Node.js, Express.js, RESTful APIs, and MongoDB.",
    },
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <h1 className="lg:text-2xl w-[100%] lg:scroll-mt-24 backdrop-blur-sm p-4 bg-slate-900 lg:bg-transparent lg:bg-none font-semibold z-50 lg:z-0 bg-opacity-95 uppercase sticky top-0 lg:static lg:font-bold lg:text-center">
        Skills and Projects
      </h1>
      <div className="lg:mb-40 w-[80%] mx-auto lg:w-[100%] mt-5 mb-12">
        <div className="">
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
              className={`flex flex-wrap mx-auto lg:flex-nowrap w-[95%] rounded-lg gap-5 p-4 transition-all duration-300 ${
                hoveredProject === key ? "bg-gray-800 bg-opacity-40" : ""
              } ${
                hoveredProject === null || hoveredProject === key
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              onMouseEnter={() => setHoveredProject(key)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                src={project.image}
                alt="project_img"
                className="lg:w-[200px] lg:h-[200px] w-[50%] h-[50%] mx-auto rounded-md cursor-pointer"
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
                      NO DEMO
                    </a>
                  )}
                </div>
                <p className="text-lg font-semibold proname">{project.Name}</p>
                <p className="opacity-70 text-justify">{project.Description}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="/Kavin_Resume.pdf"
          className="flex items-center gap-2 mt-5 text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume <CiShare1 />
        </a>

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
                className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full w-10 h-10 hover:bg-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
