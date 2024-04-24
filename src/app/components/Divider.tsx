import React from "react";

interface DividerProps {
  variant?: "fullWidth" | "inset" | "middle" | "center";
  textAlign?: "left" | "center" | "right" | "justify";
}

const Divider: React.FC<DividerProps> = ({ variant, textAlign }) => {
  const renderDivider = (variant: string) => {
    switch (variant) {
      case "fullWidth":
        return (
          <div
            className={`border-t border-gray-800 border-solid border-b-2 ${textAlign === "justify" ? "w-full" : ""}`}
          ></div>
        );
      case "inset":
        return (
          <div
            className={`border-t border-gray-800 border-solid border-b-2 mx-8 ${textAlign === "justify" ? "w-full" : ""}`}
          ></div>
        );
      case "middle":
        return (
          <div
            className={`border-t border-gray-800 border-solid border-b-2 mx-4 ${textAlign === "justify" ? "w-full" : ""}`}
          ></div>
        );
      case "center":
        return (
          <div
            className={`border-t border-gray-800 border-solid border-b-2 mx-auto w-1/2 ${textAlign === "justify" ? "w-full" : ""}`}
          ></div>
        );
      default:
        return null;
    }
  };

  const text = {
    fullWidth: "Full width variant below",
    inset: "Inset variant below",
    middle: "Middle variant below",
    center: "List item",
  }[variant || "fullWidth"];

  return (
    <div className="w-full max-w-sm">
      <div className={`border border-gray-300 rounded p-4 text-${textAlign}`}>
        <p className="mb-4">{text}</p>
        {renderDivider(variant || "fullWidth")}
      </div>
    </div>
  );
};

export default Divider;
