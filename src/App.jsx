import React from "react";
import MouseGlow from "./components/MouseGlow";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import { FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="flex">
        {/* Left Panel */}
        <div className="relative w-[40%]">
          <MouseGlow />
          <div className="h-screen bg-slate-900 text-white p-10">
            <div className="p-10">
              <h1 className="text-[60px]">Kavin U</h1>
              <h2 className="text-md">MERN Stack Engineer</h2>
              <p className="mt-4 opacity-70">
                I build Scalable Web Applications &<br /> Dynamic User
                Interfaces in an Efficient way.
              </p>
              
              <nav className="mt-10">
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
                <div className="flex mt-20 gap-8 text-3xl "> 
                    <a href="https://github.com/Kavin-U" target="_blank" className="opacity-50 hover:opacity-95"><FaGithub/></a>
                    <a href="www.linkedin.com/in/kavin-u" target="_blank" className="opacity-50 hover:opacity-95"><FaLinkedin/></a>
                    <a href="https://www.instagram.com/_kavin_u/" target="_blank" className="opacity-50 hover:opacity-95"><FaInstagram/></a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Right Panel with Scrollable Sections */}
        <div className="bg-slate-900 text-white w-[60%] h-screen p-4 overflow-y-auto">
          <section id="about">
            <About />
          </section>
          <section id="project">
            <Project />
          </section>
          <section id="experience">
            <Experience />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
