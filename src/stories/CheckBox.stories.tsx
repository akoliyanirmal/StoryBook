import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Checkbox, { CheckboxProps } from "@/app/components/CheckBox";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const SmallCheckbox = Template.bind({});
SmallCheckbox.args = {
  label: "Small Checkbox",
  size: "small",
  checked: false,
};

export const MediumCheckbox = Template.bind({});
MediumCheckbox.args = {
  label: "Medium Checkbox",
  size: "medium",
  checked: false,
};

export const LargeCheckbox = Template.bind({});
LargeCheckbox.args = {
  label: "Large Checkbox",
  size: "large",
  checked: false,
};
