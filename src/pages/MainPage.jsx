import React from "react";
import About from "./About";
import Project from "./Project";
import Experience from "./Experience";

export default function MainPage() {
  return (
    <div className="bg-slate-900 w-1/2 h-screen p-5 overflow-y-auto">
      <div className="text-white space-y-10">
        {/* Scrollable Sections */}
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
  );
}
