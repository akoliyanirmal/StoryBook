import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  margin?: "dense" | "none";
  disableUnderline?: boolean;
  hiddenLabel?: boolean;

  //* HTML PROPS IF YOU WANT TO USE THEM

  //* accept?: string;
  //* alt?: string;
  //* autoComplete?: string;
  //* autoFocus?: boolean;
  //* checked?: boolean;
  //* dirName?: string;
  //* form?: string;
  //* formAction?: string;
  //* height?: string | number;
  //* max?: string | number;
  //* maxLength?: number;
  //* min?: string | number;
  //* multiple?: boolean;
  //* required?: boolean;
  //* type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  margin = "none",
  disableUnderline = false,
  hiddenLabel = false,
  ...inputProps
}) => {
  const inputMarginClass = margin === "dense" ? "p-1" : "";
  const underlineClass = disableUnderline ? "border-none" : "border";
  const labelClass = hiddenLabel ? "sr-only" : "";

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className={`mb-1 text-sm font-semibold ${labelClass}`}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputMarginClass} ${underlineClass}`}
        style={{ resize: "none" }}
        //* Spread additional HTML props
        {...inputProps}
      />
    </div>
  );
};

export default TextField;
