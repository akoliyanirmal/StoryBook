import React, { useState } from "react";

export interface CheckboxProps {
  label: string;
  size?: "small" | "medium" | "large";
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  size = "medium",
  checked,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      style={{
        fontSize:
          size === "small" ? "12px" : size === "large" ? "20px" : "16px",
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
