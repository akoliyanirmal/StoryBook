import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Fab, FabProps } from "@/app/components/FloatingButton";

export default {
  title: "Components/Fab",
  component: Fab,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "error",
          "info",
          "inherit",
          "primary",
          "secondary",
          "success",
          "warning",
        ],
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: StoryFn<FabProps> = (args) => <Fab {...args} />;

export const FloatingButton = Template.bind({});
FloatingButton.args = {
  color: "primary",
  label: "Floating Button",
};
