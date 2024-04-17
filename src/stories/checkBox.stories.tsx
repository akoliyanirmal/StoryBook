import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CheckBox from "@/app/components/checkBox";

export default {
  title: "CheckBox",
  component: CheckBox,
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <CheckBox {...args} />;

export const CheckBoxs = Template.bind({});
CheckBoxs.args = {
  id: "checkbox",
  size: "medium",
  label: "CheckBox",
};
