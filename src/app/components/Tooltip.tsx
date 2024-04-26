import React, { useState } from "react";

export interface TooltipProps {
  children: React.ReactNode;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
}

const Tooltip: React.FC<TooltipProps> = ({ children, placement = "top" }) => {
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
        <div
          className={`absolute z-10 py-1 px-2 bg-gray-800 text-white text-xs rounded-md ${
            (placement === "top" &&
              "bottom-full left-1/2 transform -translate-x-1/2") ||
            (placement === "top-start" &&
              "bottom-full left-0 transform -translate-x-0") ||
            (placement === "top-end" &&
              "bottom-full right-0 transform translate-x-0") ||
            (placement === "bottom" &&
              "top-full left-1/2 transform -translate-x-1/2") ||
            (placement === "bottom-start" &&
              "top-full left-0 transform -translate-x-0") ||
            (placement === "bottom-end" &&
              "top-full right-0 transform translate-x-0") ||
            (placement === "left" &&
              "top-1/2 right-full transform -translate-y-1/2") ||
            (placement === "left-start" &&
              "top-0 right-full transform -translate-y-0") ||
            (placement === "left-end" &&
              "bottom-0 right-full transform translate-y-0") ||
            (placement === "right" &&
              "top-1/2 left-full transform -translate-y-1/2") ||
            (placement === "right-start" &&
              "top-0 left-full transform -translate-y-0") ||
            (placement === "right-end" &&
              "bottom-0 left-full transform translate-y-0")
          }`}
        >
          Delete
        </div>
      )}
    </div>
  );
};

export default Tooltip;
