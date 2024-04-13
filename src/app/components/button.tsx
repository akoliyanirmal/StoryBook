import React from "react";

interface SimpleButtonProps {
  children?: React.ReactNode;
  classes?: string;
  color?: "default" | "inherit" | "primary" | "secondary";
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  sx?: React.CSSProperties;
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  children,
  classes,
  color = "default",
  disabled = false,
  disableElevation = false,
  disableFocusRipple = false,
  disableRipple = false,
  endIcon,
  fullWidth = false,
  href,
  size = "medium",
  startIcon,
  sx,
  variant = "text",
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      className={classes}
      style={sx}
      onClick={handleClick}
      disabled={disabled}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};

export default SimpleButton;
