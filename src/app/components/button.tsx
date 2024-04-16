import React from "react";

interface SimpleButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  Colorvariant?: "primary" | "secondary" | "danger" | "success";
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  children,
  disabled = false,
  endIcon,
  fullWidth = false,
  href,
  size = "small",
  startIcon,
  onClick,
  backgroundColor,
  Colorvariant = "primary",
}) => {
  const handleClick = () => {
    if (onClick && !disabled) onClick();
  };

  const buttonSizeClass =
    size === "small" ? "p-2" : size === "large" ? "p-6" : "p-4";

  const textColor = disabled
    ? "#FFFFFF"
    : backgroundColor
      ? getContrastColor(backgroundColor)
      : "#FFFFFF";

  const ColorvariantClasses = {
    primary: backgroundColor ? "" : "bg-blue-700",
    secondary: backgroundColor ? "" : "bg-gray-600",
    danger: backgroundColor ? "" : "bg-red-600 ",
    success: backgroundColor ? "" : "bg-green-600",
  };

  const fullWidthClass = fullWidth ? "w-full" : "";

  const hoverEffect = !disabled ? "hover:bg-opacity-90" : "";

  return (
    <button
      className={`rounded-lg bg-slate-100 font-bold text-gray-900
       ${fullWidthClass} ${buttonSizeClass}  ${ColorvariantClasses[Colorvariant]} ${hoverEffect}`}
      onClick={handleClick}
      disabled={disabled}
      style={{
        backgroundColor,
        color: textColor,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};

type GetContrastColorProps = {
  substr(arg0: number, arg1: number): string;
};

function getContrastColor(hexColor: GetContrastColorProps) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "#000000" : "#ffffff";
}

export default SimpleButton;
