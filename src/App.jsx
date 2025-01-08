import React from "react";
import MouseGlow from "./components/MouseGlow";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="block lg:flex bg-slate-900">
        {/* Left Panel */}
        <div className="relative w-[100%] lg:w-[40%]">
          <MouseGlow />
          <div className="lg:h-screen bg-slate-900 text-white py-8 px-6 md:p-10">
            <div className="lg:p-10">
              <h1 className="text-3xl mb-2 md:text-[60px]">Kavin U</h1>
              <h2 className="text-md">MERN Stack Engineer</h2>
              <p className="mt-4 opacity-70">
                I build Scalable Web Applications &<br /> Dynamic User
                Interfaces in an Efficient way.
              </p>
              <nav className="mt-10 lg:block hidden">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#about"
                      className="text-white opacity-70 hover:opacity-100 cursor-pointer"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#project"
                      className="text-white opacity-70 hover:opacity-100 cursor-pointer"
                    >
                      Skills & Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="text-white opacity-70 hover:opacity-100 cursor-pointer"
                    >
                      Experience
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex mt-20 gap-8 text-3xl ">
                <a
                  href="https://github.com/Kavin-U"
                  target="_blank"
                  className="opacity-50 hover:opacity-95"
                >
                  <FaGithub />
                </a>
                <a
                  href="www.linkedin.com/in/kavin-u"
                  target="_blank"
                  className="opacity-50 hover:opacity-95"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/_kavin_u/"
                  target="_blank"
                  className="opacity-50 hover:opacity-95"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel with Scrollable Sections */}
        <div className="bg-slate-900 text-white w-[100%] lg:w-[60%] lg:h-screen lg:p-4 lg:overflow-y-auto">
          <section id="about">
            <About />
          </section>
          <section id="project">
            <Project />
          </section>
          <section className="w-[100%]" id="experience">
            <Experience />
          </section>
          <footer className="w-[100%] h-[200px] py-10 px-2 lg:mt-4 lg:mb-4 bg-slate-900">
            <p className="opacity-50 text-justify">
              Loosely designed and coded in Visual Studio Code by yours
              truly. Built with React.js and Tailwind CSS, deployed with Vercel.
              All text is set in the Inter typeface.
            </p>
            <p className="opacity-50 text-center py-5">2025 &copy; Kavin U</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
