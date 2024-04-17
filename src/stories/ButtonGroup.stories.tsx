import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomButtonGroup from "@/app/components/ButtonGroup";

export default {
  title: "ButtonGroup",
  component: CustomButtonGroup,
  argTypes: {
    children: { control: "text" },
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
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["text", "outlined", "contained"],
      },
    },
  },
} as Meta;

const Template: StoryFn<any> = (args) => (
  <CustomButtonGroup {...args}>
    <button>One</button>
    <button>Two</button>
    <button>Three</button>
  </CustomButtonGroup>
);

export const GroupButton = Template.bind({});
GroupButton.args = {
  color: "primary",
  disabled: false,
  fullWidth: false,
  orientation: "horizontal",
  size: "medium",
  variant: "contained",
};
