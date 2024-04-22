import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Switch, { SwitchProps } from "@/app/components/Switch";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    onChange: { action: "onChange" },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    edge: {
      control: {
        type: "select",
        options: ["start", "end"],
      },
    },
  },
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const SwitchButton = Template.bind({});
SwitchButton.args = {
  onChange: (checked: boolean): void => {
    console.log("Switch toggled:", checked);
  },
};
