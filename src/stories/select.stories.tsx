// select.stories.tsx

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Select from "@/app/components/select";

export default {
  title: "Select",
  component: Select,
} as Meta;

const Template: StoryFn = () => {
  const options = [
    { value: "1", label: "Alice" },
    { value: "2", label: "Bob" },
    { value: "3", label: "Charlie" },
  ];

  return <Select options={options} />;
};
export const SelectName = Template.bind({});
