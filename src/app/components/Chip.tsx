import React from "react";

export type ChipProps = {
  label: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "small" | "medium" | "large";
  avatar?: string;
};

const Chip = ({
  label,
  color = "primary",
  size = "medium",
  avatar,
}: ChipProps) => {
  const baseStyles =
    "flex items-center rounded-full py-1 px-3 text-sm font-medium hover:text-white focus:outline-none";

  const getColorStyles = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500";
      case "secondary":
        return "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-500";
      case "error":
        return "bg-red-500 text-white hover:bg-red-700 focus:ring-red-500";
      case "info":
        return "bg-blue-400 text-white hover:bg-blue-600 focus:ring-blue-400";
      case "success":
        return "bg-green-500 text-white hover:bg-green-700 focus:ring-green-500";
      case "warning":
        return "bg-yellow-500 text-white hover:bg-yellow-700 focus:ring-yellow-500";
      default:
        return "";
    }
  };

  const getSizeStyles = (size: string) => {
    switch (size) {
      case "small":
        return "text-xs py-0.5 px-2";
      case "large":
        return "text-lg py-2 px-4";
      default:
        return "text-sm py-1 px-3";
    }
  };

  const styles = {
    filled: `${baseStyles} ${getColorStyles(color)} ${getSizeStyles(size)}`,
  };

  return (
    <button className={`${styles.filled} focus:ring-2 focus:ring-offset-2`}>
      {avatar && (
        <img src={avatar} alt="Avatar" className="w-6 h-6 rounded-full mr-2" />
      )}
      {label}
    </button>
  );
};

export default Chip;
