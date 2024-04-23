import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Toggle, { ToggleProps } from "@/app/components/Toggle";

export default {
  title: "Toggle",
  component: Toggle,
  argTypes: {
    onChangeLeft: { action: "changed" },
    onChangeCenter: { action: "changed" },
    onChangeRight: { action: "changed" },
    buttonColor: {
      control: {
        type: "select",
        options: [
          "standard",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    },
  },
} as Meta;

const Template: StoryFn<ToggleProps> = (args) => <Toggle {...args} />;

export const TextJustification: StoryFn<ToggleProps> = Template.bind({});
TextJustification.args = {
  onChangeLeft: () => console.log("Left option clicked"),
  onChangeCenter: () => console.log("Center option clicked"),
  onChangeRight: () => console.log("Right option clicked"),
  buttonColor: "standard",
};
