import React, { useState } from "react";

export interface SwitchProps {
  onChange: (checked: boolean) => void;
  color?: "primary" | "secondary" | "error" | "success" | "warning";
  size?: "small" | "medium" | "large";
  edge?: "end" | "start";

  //! HTML PROPS
  //*   checked?: boolean;
  //*   checkedIcon?: React.ReactNode;
  //*   classes?: Record<string, string>;
  //*   defaultChecked?: boolean;
  //*   disabled?: boolean;
  //*   disableRipple?: boolean;
  //*   icon?: React.ReactNode;
  //*   id?: string;
  //*   inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  //*   inputRef?: React.Ref<HTMLInputElement>;
  //*   required?: boolean;
  //*   sx?: React.CSSProperties;
  //*   value?: string;
}

const Switch: React.FC<SwitchProps> = ({
  onChange,
  color = "primary",
  size = "medium",
  edge = "start",

  //* ADDITIONAL PROPS
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  return (
    <div
      className={`relative inline-block ${
        size === "small" ? "w-6" : size === "large" ? "w-12" : "w-10"
      } mr-2 align-middle select-none transition duration-200 ease-in`}
      onClick={toggleSwitch}
      style={
        edge
          ? {
              marginLeft: edge === "start" ? "-0.25rem" : "0",
              marginRight: edge === "end" ? "-0.25rem" : "0",
            }
          : {}
      }
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        className={`toggle-checkbox absolute block ${
          size === "small"
            ? "w-4 h-4"
            : size === "large"
              ? "w-8 h-8"
              : "w-6 h-6"
        } rounded-full bg-white border-4 appearance-none cursor-pointer ${
          isChecked ? "right-0" : "left-0"
        } ${color === "primary" ? "border-blue-500" : ""} ${
          color === "secondary" ? "border-gray-500" : ""
        } ${color === "error" ? "border-red-500" : ""} ${
          color === "success" ? "border-green-500" : ""
        } ${color === "warning" ? "border-yellow-500" : ""}`}
        //* Spread all additional props
        {...props}
      />
      <label
        htmlFor="toggle"
        className={`toggle-label block overflow-hidden ${
          size === "small" ? "h-4" : size === "large" ? "h-8" : "h-6"
        } rounded-full cursor-pointer ${
          color === "primary" ? "bg-blue-500" : ""
        } ${color === "secondary" ? "bg-gray-500" : ""} ${
          color === "error" ? "bg-red-500" : ""
        } ${color === "success" ? "bg-green-500" : ""} ${
          color === "warning" ? "bg-yellow-500" : ""
        }`}
      />
    </div>
  );
};

export default Switch;
