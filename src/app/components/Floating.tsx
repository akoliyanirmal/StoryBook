import React from "react";
import { FcLinux } from "react-icons/fc";

export interface FabProps {
  onClick: () => void;
  backgroundColor?: string;
}

const Fab: React.FC<FabProps> = ({
  onClick,
  backgroundColor = "lightslategray",
}) => {
  const handleIconClick = () => {
    onClick();
    console.log("Icon clicked");
  };

  return (
    <>
      <FcLinux
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
          padding: "0px",
          minWidth: "0px",
          width: "77px",
          height: "77px",
          zIndex: "1050",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
          color: "rgba(0, 0, 0, 0.87)",
          backgroundColor: backgroundColor,
        }}
        onClick={handleIconClick}
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
        Floating Button
      </div>
    </>
  );
};

export default Fab;
