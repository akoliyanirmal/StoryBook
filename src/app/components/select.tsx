// select.tsx

import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const option = options.find((opt) => opt.value === selectedValue);
    setSelectedOption(option || null);
    console.log("Selected option:", option);
  };

  return (
    <select
      style={{
        fontSize: "19px",
        borderRadius: "10px",
        color: "white",
        background: "darkblue",
      }}
      value={selectedOption?.value || ""}
      onChange={handleChange}
    >
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
