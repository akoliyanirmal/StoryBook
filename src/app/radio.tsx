import React from "react";

export interface RadioProps {
  options: { label: string; value: string }[];
  selectedOption?: string;
  onChange: (option: string) => void;
}

const Radio: React.FC<RadioProps> = ({ options, selectedOption, onChange }) => {
  return (
    <div>
      <div className="mb-2 font-semibold">Gender</div>
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center mr-4">
          <input
            type="radio"
            className="form-radio text-blue-500"
            value={option.value}
            checked={option.value === selectedOption}
            onChange={() => onChange(option.value)}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
