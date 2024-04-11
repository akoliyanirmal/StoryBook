import React from "react";

interface ButtonsProps {
  options: string[];
  onClick: (option: string) => void;
  size?: "small" | "medium" | "large";
}

export const Buttons: React.FC<ButtonsProps> = ({
  options,
  onClick,
  size = "medium",
}) => {
  return options.map((option, index) => (
    <button
      key={index}
      onClick={() => onClick(option)}
      className={`button-${size}`}
    >
      {" "}
      {option}
    </button>
  ));
};
