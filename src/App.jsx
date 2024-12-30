import React from "react";
import MouseGlow from "./components/MouseGlow"; // Adjust the path based on your folder structure

function App() {
  return (
    <div className="relative">
      <MouseGlow />
      <div className="h-screen bg-slate-900 text-white p-10">
        <div className="p-10">
          <h1 className="text-[60px]">Kavin U</h1>
          <h2 className="text-md">MERN Stack Developer</h2>
          <p className="mt-4 opacity-70">I build Reusable Components, pixel -perfect<br/> digital experience for the web</p>
        </div>
      </div>
    </div>
  );
}

export default App;
