import React from "react";

export interface CircularProps {
  size?: number;
  color?: string;
}

const Circular: React.FC<CircularProps> = ({ size = 40, color = "black" }) => {
  return (
    <div
      className="rounded-full border-4 border-transparent border-t-black animate-spin aspect-w-1 aspect-h-1"
      style={{ width: size, height: size, borderTopColor: color }}
    ></div>
  );
};

export default Circular;
