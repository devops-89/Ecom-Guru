import "./loader.css";
import { useEffect, useState } from "react";

export default function Loader() {
  const handleWhiteBox = () => {
    const yellowBox = document.querySelector(".yellow-box");
    yellowBox.classList.add("yellow-rotate");
  };

  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        
        {/* loading box */}
        <div className="yellow-box">
          <div className="white-box" onAnimationEnd={handleWhiteBox}></div>
        </div>

        {/* typing loading */}
        <p className="typing-text">Please wait</p>

      </div>
    </div>
  );
}
