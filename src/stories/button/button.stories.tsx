import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SimpleButton from "@/app/components/Button";

export default {
  title: "Button",
  component: SimpleButton,
  argTypes: {
    children: { control: "text" },
    classes: { control: "text" },
    color: {
      control: "radio",
      options: ["default", "inherit", "primary", "secondary"],
    },
    disabled: { control: "boolean" },
    disableElevation: { control: "boolean" },
    disableFocusRipple: { control: "boolean" },
    disableRipple: { control: "boolean" },
    endIcon: { control: "text" },
    fullWidth: { control: "boolean" },
    href: { control: "text" },
    size: { control: "select", options: ["small", "medium", "large"] },
    startIcon: { control: "text" },
    sx: { control: "object" },
    variant: { control: "select", options: ["text", "outlined", "contained"] },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn = (args) => <SimpleButton {...args} />;

export const BTN = Template.bind({});
BTN.args = {
  children: "Button",
};
