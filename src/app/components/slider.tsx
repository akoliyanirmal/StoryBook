import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({ min, max, step = 1 }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    console.log("Slider value:", newValue);
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Slider;
