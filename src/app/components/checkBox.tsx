import React from "react";

interface CheckBoxProps {
  id?: string;
  size?: "medium" | "small";
  label?: string;

  //* HTML PROPS

  //*   autofocus?: boolean;
  // checked?: boolean;
  //*   defaultChecked?: boolean;
  //*   defaultValue?: string;
  //*   disabled?: boolean;
  //*   form?: string;
  //*   indeterminate?: boolean;
  //*   name?: string;
  //*   required?: boolean;
  //*   type?: string;
  //*   value?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  size = "medium",
  label = "CheckBox",
  // checked = false,

  //* ADDITIONAL PROPS
  ...props
}) => {
  const getSizeClass = () => {
    if (size === "small") return "h-4 w-4";
    return "h-6 w-6";
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className={`form-checkbox ${getSizeClass()}`}
        // checked={checked}
        //* Spread all additional props
        {...props}
      />
      <label htmlFor={id} className="ml-2 select-none">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
