import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SimpleButton from "@/app/components/Button";

export default {
  title: "Button",
  component: SimpleButton,
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
    endIcon: { control: "text" },
    fullWidth: { control: "boolean" },
    href: { control: "text" },
    size: { control: "select", options: ["small", "medium", "large"] },
    startIcon: { control: "text" },
    onClick: { action: "Button clicked" },
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: StoryFn = (args) => <SimpleButton {...args} />;

export const BTN = Template.bind({});
BTN.args = {
  children: "Button",
};
