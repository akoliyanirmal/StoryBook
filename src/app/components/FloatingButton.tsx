import React from "react";
import { BsFillPencilFill } from "react-icons/bs";

export interface FabProps {
  color?:
    | "error"
    | "info"
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  label?: string;

  //* HTML PROPS IF YOU WANT TO USE THEM

  //*   align?: "left" | "center" | "right";
  //*   fillMode?: "extended" | "normal";
  //*   icon?: React.ReactNode;
  //*   rounded?: boolean;
  //*   shape?: "rounded" | "square";
  //*   size?: "small" | "medium" | "large";
}

export const Fab: React.FC<FabProps> = ({
  color = "primary",
  label = "Floating Button",
  ...buttonProps
}) => {
  return (
    <>
      <button
        //* Spread additional HTML props
        {...buttonProps}
        className={`inline-flex items-center justify-center relative box-border select-none middle transition duration-250 rounded-full w-14 h-14 z-50 shadow-sm text-black ${
          color === "primary"
            ? "bg-purple-400"
            : color === "secondary"
              ? "bg-gray-400"
              : color === "error"
                ? "bg-red-400"
                : color === "success"
                  ? "bg-green-400"
                  : color === "warning"
                    ? "bg-yellow-400"
                    : color === "info"
                      ? "bg-blue-400"
                      : color === "inherit"
                        ? "bg-transparent"
                        : ""
        }`}
      >
        <BsFillPencilFill
          className={`select-none w-4 h-4 inline-block fill-current flex-shrink-0 transition duration-200 ${
            "extended" ? "w-6" : ""
          }`}
        />
      </button>
      <div>{label}</div>
    </>
  );
};
