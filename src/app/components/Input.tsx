import React from "react";
interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  margin?: "dense" | "none";
  color?: "primary" | "secondary";
  disableUnderline?: boolean;
  hiddenLabel?: boolean;
  maxRows?: number | string;
}
const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  margin = "none",
  color = "primary",
  disableUnderline = false,
  hiddenLabel = false,
  maxRows,
  ...inputProps
}) => {
  const inputMarginClass = margin === "dense" ? "p-1" : "";
  const inputColorClass =
    color === "primary" ? "text-primary" : "text-secondary";
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
        {...inputProps}
        className={`border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputMarginClass} ${inputColorClass} ${underlineClass}`}
        style={{ resize: "none" }}
        rows={typeof maxRows === "number" ? maxRows : undefined}
        maxLength={typeof maxRows === "string" ? parseInt(maxRows) : undefined}
      />
    </div>
  );
};
export default TextField;
