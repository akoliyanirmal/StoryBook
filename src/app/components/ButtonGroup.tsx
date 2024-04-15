import React from "react";

interface ButtonGroupProps {
  children: React.ReactNode;
  color?: string;
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
  //   const fullWidthClass = fullWidth ? "w-full" : "";
  const orientationClass = orientation === "vertical" ? "flex-col" : "flex-row";
  const sizeClass =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "large"
        ? "px-4 py-2 text-lg"
        : "px-3 py-2";
  const variantClass =
    variant === "outlined" ? "border" : variant === "text" ? "" : "shadow-md";
  const colorClass =
    color === "secondary"
      ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
      : color === "default"
        ? "bg-white text-gray-800 hover:bg-gray-100"
        : "bg-blue-500 text-white hover:bg-blue-600";

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
          onClick={(e) => {
            if (disabled) e.preventDefault();
          }}
          {...{}}
        >
          {child}
        </button>
      ))}
    </div>
  );
};

export default CustomButtonGroup;
