// radio.stories.tsx
import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import Radio, { RadioProps } from "@/app/radio";

export default {
  title: "Components/Radio",
  component: Radio,
};

const Template: StoryFn<RadioProps> = (args) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    "male" // Set "male" as the default selected option
  );

  const handleChange = (option: string) => {
    setSelectedOption(option);
    args.onChange(option);
  };

  return (
    <Radio {...args} selectedOption={selectedOption} onChange={handleChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ],
  onChange: (option: string) => console.log(option),
};
