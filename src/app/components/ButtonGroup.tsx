import React from "react";

interface ButtonGroupProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
  fullWidth?: boolean;
  orientation?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
}

const CustomButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  color = "primary",
  disabled = false,
  fullWidth = false,
  orientation = "horizontal",
  size = "medium",
  variant = "contained",
}: ButtonGroupProps) => {
  const orientationClass = orientation === "vertical" ? "flex-col" : "flex-row";
  const sizeClass =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "large"
        ? "px-4 py-2 text-lg"
        : "px-3 py-2";
  const variantClass =
    variant === "outlined" ? "border" : variant === "text" ? "" : "shadow-md";

  let colorClass = "";
  switch (color) {
    case "primary":
      colorClass = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "secondary":
      colorClass = "bg-gray-300 text-gray-800 hover:bg-gray-400";
      break;
    case "error":
      colorClass = "bg-red-500 text-white hover:bg-red-600";
      break;
    case "info":
      colorClass = "bg-blue-300 text-white hover:bg-blue-400";
      break;
    case "success":
      colorClass = "bg-green-500 text-white hover:bg-green-600";
      break;
    case "warning":
      colorClass = "bg-yellow-500 text-white hover:bg-yellow-600";
      break;
    default:
      colorClass = "bg-blue-500 text-white hover:bg-blue-600";
  }

  return (
    <div
      className={`flex ${orientationClass} ${
        fullWidth ? "w-full" : ""
      } rounded-md overflow-hidden`}
    >
      {React.Children.map(children, (child) => (
        <button
          className={`flex-1 focus:outline-none ${sizeClass} ${variantClass} ${colorClass} ${
            disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-90"
          }`}
          disabled={disabled}
        >
          {child}
        </button>
      ))}
    </div>
  );
};

export default CustomButtonGroup;
