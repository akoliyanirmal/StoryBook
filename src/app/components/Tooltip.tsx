import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

export interface ToolTipsProps {
  onClick: () => void;
}

const ToolTips: React.FC<ToolTipsProps> = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleIconClick = () => {
    onClick();
    console.log("Icon clicked");
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <MdDelete
        className="h-8 w-8"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          boxSizing: "border-box",
          outline: "0px",
          border: "0px",
          margin: "0px",
          cursor: "pointer",
          userSelect: "none",
          verticalAlign: "middle",
          appearance: "none",
          textDecoration: "none",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          fontWeight: "500",
          fontSize: "0.875rem",
          lineHeight: "1.75",
          letterSpacing: "0.02857em",
          textTransform: "uppercase",
          minHeight: "36px",
          transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderRadius: "50%",
          padding: "4px",
          minWidth: "38px",
          width: "42px",
          height: "41px",
          zIndex: "1050",
          color: hovered ? "red" : "rgba(0, 0, 0, 0.87)",
        }}
        onClick={handleIconClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div
        style={{
          position: "relative",
          top: "10px",
          fontSize: "20px",
          fontWeight: "700",
          color: "navy",
        }}
      >
        Tooltip
      </div>
    </>
  );
};

export default ToolTips;
