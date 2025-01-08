import React from "react";
import myImg4 from "../assets/myImage4.png";

export default function About() {
  return (<>
  <div className="w-[100%] p-4 bg-slate-900 uppercase backdrop-blur-sm font-semibold z-50 bg-opacity-95 lg:hidden visible sticky top-0">About</div>
    <div className="lg:my-36 w-[90%] lg:w-[100%] lg:mt-20 mb-10 mx-auto">
      <div className="lg:flex gap-7">
        <img
          src={myImg4}
          alt="my-img"
          className="lg:hidden block z-0 mx-auto w-[200px] h-[350] mb-2 lg:mb-0 scroll-mt-10 lg:scroll-mt-24 lg:w-[350px] lg:h-[450px] lg:mt-[-60px] rounded-xl drop"
        />
        <div className="lg:flex lg:flex-col text-justify lg:gap-5">
          <p>
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability.
          </p>
          <p>
            Currently, I'm looking for job opportunities where I can contribute
            to innovative projects, grow my skills as a developer, and
            collaborate with a dynamic team to build impactful solutions.
          </p>
          <p>
            In my spare time, I enjoy playing cricket, gaming, spending quality
            time with friends, or staying active at the gym. These activities
            help me unwind and stay energized.
          </p>
        </div>
        <img
          src={myImg4}
          alt="my-img"
          className="hidden lg:block w-[350px] h-[450px] mt-[-60px] rounded-xl drop"
        />
      </div>
    </div>
    </>
  );
}
