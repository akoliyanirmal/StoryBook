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
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const fullWidthClass = fullWidth ? "w-full" : "";

  const buttonSizeClass =
    size === "small" ? "p-2" : size === "large" ? "p-6" : "p-4";

  const textColor = disabled
    ? "#ffffff"
    : backgroundColor
      ? getContrastColor(backgroundColor)
      : "#000000";

  return (
    <button
      className={`rounded-lg bg-slate-100 font-bold text-gray-900 ${fullWidthClass} ${buttonSizeClass}`}
      onClick={handleClick}
      disabled={disabled}
      style={{ backgroundColor, color: textColor }}
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
