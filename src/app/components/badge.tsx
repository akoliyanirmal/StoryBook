import React from "react";

interface BadgeProps {
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ count }) => {
  return (
    <div className="relative">
      <img
        src="/images/truck.png"
        alt=""
        style={{ height: "49px", width: "85px" }}
      />

      {count > 0 && (
        <span
          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
          style={{
            position: "relative",
            bottom: "35px",
            right: "27px",
            borderRadius: "13px",
            color: "white",
            paddingLeft: "8px",
            paddingRight: "8px",
            background: "slateblue",
            fontFamily: "cursive",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default Badge;
