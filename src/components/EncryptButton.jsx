import React from "react";

const EncryptButton = () => {
  const handleClick = () => {
    console.log("Encrypt button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 glass-button font-semibold rounded-lg"
    >
      Get Started
    </button>
  );
};

export default EncryptButton;
