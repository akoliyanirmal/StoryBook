import React, { ReactNode } from "react";

export interface StackProps {
  children: ReactNode;
  spacing?: string;
}

const Stack: React.FC<StackProps> = ({
  children,
  spacing = "space-y-4 text-center",
}) => {
  return (
    <div className={spacing}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
};

export default Stack;
