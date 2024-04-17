import React from "react";

interface SimpleButtonProps {
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  backgroundColor?: string;
  Color?: "primary" | "secondary" | "danger" | "success";

  //* HTML PROPS

  //* formAction?: string;
  //* formEncType?: string;
  //* formMethod?: string;
  //* formNoValidate?: boolean;
  //* formTarget?: string;
  //* name?: string;
  //* type?: "button" | "submit" | "reset";
  //* value?: string;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  children,
  endIcon,
  fullWidth = false,
  href,
  size = "small",
  startIcon,
  backgroundColor,
  Color = "primary",

  // ADDITIONAL PROPS
  ...props
}) => {
  const buttonSizeClass =
    size === "small" ? "p-2" : size === "large" ? "p-6" : "p-4";

  const textColor = backgroundColor
    ? getContrastColor(backgroundColor)
    : "#FFFFFF";

  const ColorvariantClasses = {
    primary: backgroundColor ? "" : "bg-blue-600 text-white",
    secondary: backgroundColor ? "" : "bg-gray-700 text-white",
    danger: backgroundColor ? "" : "bg-red-700 text-white",
    success: backgroundColor ? "" : "bg-green-700 text-white",
  };

  const fullWidthClass = fullWidth ? "w-full" : "";

  const hoverEffect = "hover:bg-opacity-90";

  return (
    <button
      className={`rounded-lg bg-slate-100 font-bold text-gray-900
       ${fullWidthClass} ${buttonSizeClass}  ${ColorvariantClasses[Color]} ${hoverEffect}`}
      style={{
        backgroundColor,
        color: textColor,
        opacity: 1,
        cursor: "pointer",
      }}
      //* Spread all additional props
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};

function getContrastColor(hexColor: string) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

export default SimpleButton;
