// toggle.tsx

import React, { useState } from "react";

const ToggleButtons: React.FC = () => {
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`focus:outline-none ${
          alignment === "left" ? "bg-blue-500" : "bg-gray-300"
        } text-white px-4 py-2 rounded-md`}
        onClick={() => handleAlignment("left")}
      >
        Left
      </button>
      <button
        className={`focus:outline-none ${
          alignment === "center" ? "bg-blue-500" : "bg-gray-300"
        } text-white px-4 py-2 rounded-md`}
        onClick={() => handleAlignment("center")}
      >
        Center
      </button>
      <button
        className={`focus:outline-none ${
          alignment === "right" ? "bg-blue-500" : "bg-gray-300"
        } text-white px-4 py-2 rounded-md`}
        onClick={() => handleAlignment("right")}
      >
        Right
      </button>
      <button
        className={`focus:outline-none cursor-not-allowed ${
          alignment === "justify" ? "bg-blue-500" : "bg-gray-300"
        } text-white px-4 py-2 rounded-md`}
        disabled
      >
        Justify
      </button>
    </div>
  );
};

export default ToggleButtons;
