import React, { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isHovered && (
        <div className="absolute z-10 py-1 px-2 bg-gray-800 text-white text-xs rounded-md top-full left-1/2 transform -translate-x-1/2">
          Delete
        </div>
      )}
    </div>
  );
};

export default Tooltip;
