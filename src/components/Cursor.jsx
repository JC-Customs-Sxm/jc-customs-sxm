import React, { useEffect, useState } from "react";
import "../tailwind.css"; // Ensure correct path

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Add mouse enter and leave event listeners for highlighted text
    const textElements = document.querySelectorAll(".highlight-text");
    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      id="cursor"
      className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-all duration-300 transform-origin-center ${
        isHovering ? "hovering" : ""
      }`}
      style={{
        left: `${cursorPosition.x - 27.5}px`,
        top: `${cursorPosition.y - 27.5}px`,
        width: isHovering ? "80px" : "20px", // Larger size on hover
        height: isHovering ? "80px" : "20px",
        border: "2px solid rgba(255, 255, 255, 0.7)", // Border to highlight cursor
        borderRadius: "50%",
        backgroundColor: isHovering ? "transparent" : "rgba(0, 0, 0, 0.8)", // Centered circle background
        boxShadow: isHovering
          ? "0 0 100px 30px rgba(255, 255, 255, 0.7)" // Spotlight effect on hover
          : "none", // Spotlight glow
        mixBlendMode: "difference", // Ensures better contrast
      }}
    >
      <div className="outer"></div>
      <div className="inner"></div>
    </div>
  );
};

export default Cursor;
