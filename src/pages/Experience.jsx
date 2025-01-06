import React, { useState } from "react";
import intern from "../assets/Intern.png";
import certificate from "../assets/Mern_Certificate.jpeg";

export default function Experience() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (<>
    <h1 className="w-[100%] p-4 mb-5 bg-slate-900 lg:bg-transparent z-50 bg-opacity-95 backdrop-blur-sm lg:text-center text-left lg:font-bold font-semibold sticky top-0 lg:static uppercase lg:text-2xl">Experience</h1>
    <div className="flex flex-col w-[80%] lg:w-[100%] mx-auto gap-6">
      {/* Internship Card */}
      <a
        href="https://github.com/Kavin-U/Certificate/blob/main/Kavin%20U%20_Intern.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`flex flex-wrap lg:flex-nowrap gap-10 p-4 w-[95%] rounded-lg transition-all duration-300 ${
            hoveredItem === "intern"
              ? "bg-gray-800 bg-opacity-40"
              : hoveredItem === null
              ? "opacity-100"
              : "opacity-50"
          }`}
          onMouseEnter={() => setHoveredItem("intern")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="lg:w-[20%] w-[100%]">
            <img
              className="lg:w-[130px] lg:h-[150px] w-[200px] mx-auto h-[250px] rounded-md cursor-pointer"
              src={intern}
              alt="internship"
            />
          </div>
          <div className="w-[80%]">
            <h1 className="text-xl font-semibold">
              Cubiksoft Technologies | Internship
            </h1>
            <p className="opacity-55">JUL 2024 - DEC 2024</p>
            <p className="text-justify">
              Worked on live projects focusing on user authentication and
              authorization, global state management, and reusable UI
              components, with a special emphasis on form data management.
            </p>
          </div>
        </div>
      </a>

      {/* Certificate Card */}
      <a
        href="https://github.com/Kavin-U/Certificate/blob/main/Qtree%20Mern%20Certificate.jpeg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`flex flex-wrap lg:flex-nowrap gap-10 p-4 w-[95%] rounded-lg transition-all duration-300 ${
            hoveredItem === "certificate"
              ? "bg-gray-800 bg-opacity-40"
              : hoveredItem === null
              ? "opacity-100"
              : "opacity-50"
          }`}
          onMouseEnter={() => setHoveredItem("certificate")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="lg:w-[20%] w-[100%]">
            <img
              className="lg:w-[130px] lg:h-[100px] w-[230px] h-[180px] mx-auto rounded-md cursor-pointer"
              src={certificate}
              alt="course-certificate"
            />
          </div>
          <div className="w-[80%]">
            <h1 className="text-xl font-semibold">Qtree Technologies | MERN Stack Course</h1>
            <p className="opacity-55">JAN 2024 - JUN 2024</p>
            <p>Course Completion Certificate</p>
          </div>
        </div>
      </a>
    </div>
    </>
  );
}
