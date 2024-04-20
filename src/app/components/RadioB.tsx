import React from "react";
export interface RadioProps {
  options: { label: string; value: string }[];
  selectedOption?: string;
  onChange: (option: string) => void;

  //! HTML PROPS
  //*   autoFocus?: boolean;
  //*   checked?: boolean;
  //*   defaultChecked?: boolean;
  //*   defaultValue?: string;
  //*   disabled?: boolean;
  //*   form?: string;
  //*   name?: string;
  //*   required?: boolean;
  //*   type?: "button" | "submit" | "reset";
  //*   value?: string;
}

const Radio: React.FC<RadioProps> = ({
  options,
  selectedOption,
  onChange,
  //* ADDITIONAL PROPS
  ...props
}) => {
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
            //* Spread all additional props
            {...props}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
