import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export interface BadgeProps {
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ count }) => {
  const displayCount = count >= 0 ? count : 0;

  return (
    <div className="relative inline-block">
      <FaShoppingCart className="h-10 w-10" />

      {displayCount > 0 && (
        <span
          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold"
          style={{
            borderRadius: "13px",
            paddingLeft: "8px",
            paddingRight: "8px",
            fontFamily: "cursive",
            transform: "translate(50%, -50%)",
          }}
        >
          {displayCount >= 100 ? "100+" : displayCount}
        </span>
      )}
    </div>
  );
};

export default Badge;
