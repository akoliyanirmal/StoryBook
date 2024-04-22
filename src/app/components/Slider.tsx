import React, { useState } from "react";
import { ImVolumeLow } from "react-icons/im";
import { ImVolumeHigh } from "react-icons/im";

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";

  //! HTML PROPS
  //   "aria-label"?: string;
  //   "aria-labelledby"?: string;
  //   "aria-valuetext"?: string;
  //   classes?: Record<string, string>;
  //   components?: React.ReactNode;
  //   componentsProps?: Record<string, any>;
  //   defaultValue?: number;
  //   disabled?: boolean;
  //   disableSwap?: boolean;
  //   getAriaLabel?: (index: number) => string;
  //   getAriaValueText?: (value: number) => string;
  //   marks?: boolean | Array<{ value: number; label: React.ReactNode }>;
  //   max?: number;
  //   min?: number;
  //   name?: string;
  //   onChangeCommitted?: (event: React.ChangeEvent<{}>, value: number) => void;
  //   orientation?: "horizontal" | "vertical";
  //   scale?: (value: number) => number;
  //   shiftStep?: number;
  //   slotProps?: Record<string, any>;
  //   slots?: Record<string, React.ReactNode>;
  //   step?: number;
  //   sx?: any;
  //   tabIndex?: number;
  //   track?: "normal" | false;
  //   valueLabelDisplay?: "on" | "auto" | "off";
  //   valueLabelFormat?: string | ((value: number) => React.ReactNode);
}

const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  size = "medium",
  color = "primary",

  //* ADDITIONAL PROPS
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setInternalValue(newValue);
    onChange(newValue);
  };

  const sizeClasses = {
    small: "w-[80px]",
    medium: "w-[120px]",
    large: "w-[160px]",
  };

  const colorClasses = {
    primary: "text-blue-500",
    secondary: "text-gray-500",
    error: "text-red-500",
    info: "text-blue-300",
    success: "text-green-500",
    warning: "text-yellow-500",
  };

  const sliderSizeClass = sizeClasses[size] || sizeClasses.medium;
  const sliderColorClass = colorClasses[color] || colorClasses.primary;

  return (
    <div className="flex items-center">
      <ImVolumeLow className={`text-lg ${sliderColorClass} mr-2`} />
      <input
        type="range"
        className={`h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-white-700 ${sliderSizeClass} ${sliderColorClass}`}
        value={internalValue}
        onChange={handleChange}
        min={0}
        max={100}
        //* Spread all additional props
        {...props}
      />
      <span className={`ml-2 text-xs ${sliderColorClass}`}>
        {internalValue}
      </span>
      <ImVolumeHigh className={`text-lg ${sliderColorClass} ml-3`} />
    </div>
  );
};

export default Slider;
