import React from "react";

export interface InputProps {
  type?: "text" | "password" | "number";
  placeholder?: string;
}

export const Input = ({ type = "text", placeholder }: InputProps) => {
  return (
    <input
      type={type}
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black border-gray-400"
      placeholder={placeholder}
    />
  );
};
