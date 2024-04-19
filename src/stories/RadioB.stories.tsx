import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import Radio, { RadioProps } from "@/app/components/RadioB";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    options: { control: "array" },
    selectedOption: { control: false },
    onChange: { action: "changed" },
  },
};

const Template: StoryFn<RadioProps> = (args) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    args.selectedOption || "male"
  );

  const handleChange = (option: string) => {
    setSelectedOption(option);
    args.onChange(option);
  };

  return (
    <Radio {...args} selectedOption={selectedOption} onChange={handleChange} />
  );
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  options: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ],
  onChange: (option: string) => console.log(option),
};
