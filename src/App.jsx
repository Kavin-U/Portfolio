import React from "react";
import MouseGlow from "./components/MouseGlow"; // Adjust the path based on your folder structure

function App() {
  return (
    <div className="relative">
      <MouseGlow />
      <div className="h-screen bg-slate-900 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Hover and see the glow!</h1>
      </div>
    </div>
  );
}

export default App;
