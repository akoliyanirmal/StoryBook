import React from "react";

interface ButtonGroupProps {
  children: React.ReactNode;
}
const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  return <div className="bg-black font-bold">{children}</div>;
};

export default ButtonGroup;
