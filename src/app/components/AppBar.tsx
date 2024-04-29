import React from "react";
import { TiThMenu } from "react-icons/ti";

interface AppBarProps {
  title: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
}

const getPositionClass = (position: string) => {
  switch (position) {
    case "absolute":
      return "absolute";
    case "fixed":
      return "fixed";
    case "relative":
      return "relative";
    case "static":
      return "static";
    case "sticky":
      return "sticky";
    default:
      return "";
  }
};

const getColorClass = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-blue-500 hover:bg-blue-600";
    case "secondary":
      return "bg-gray-500 hover:bg-gray-600";
    case "error":
      return "bg-red-500 hover:bg-red-600";
    case "info":
      return "bg-blue-300 hover:bg-blue-400";
    case "success":
      return "bg-green-500 hover:bg-green-600";
    case "warning":
      return "bg-yellow-500 hover:bg-yellow-600";
    default:
      return "bg-gray-800 hover:bg-gray-900";
  }
};

const AppBar: React.FC<AppBarProps> = ({
  title,
  color = "inherit",
  position = "static",
}) => {
  return (
    <div
      className={`flex justify-between items-center py-4 px-6 text-white ${getPositionClass(position)} ${getColorClass(color)}`}
    >
      <div className="flex items-center">
        <TiThMenu className="text-2xl mr-5 cursor-pointer" />
        <div className="text-xl">{title}</div>
      </div>
      <button className="px-4 py-2 rounded-lg text-white">LOGIN</button>
    </div>
  );
};

export default AppBar;
