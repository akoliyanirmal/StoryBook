import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const option = options.find((opt) => opt.value === selectedValue);
    setSelectedOption(option || null);
  };

  return (
    <select
      className="border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      style={{
        fontSize: "19px",
        color: "black",
      }}
      value={selectedOption?.value || ""}
      onChange={handleChange}
    >
      <option>Select Name</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
