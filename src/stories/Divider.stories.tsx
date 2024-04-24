import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Divider from "@/app/components/Divider";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["fullWidth", "inset", "middle", "center"],
      },
    },
    textAlign: {
      control: {
        type: "select",
        options: ["left", "center", "right", "justify"],
      },
    },
  },
} as Meta;

interface StoryProps {
  variant: "fullWidth" | "inset" | "middle" | "center";
  textAlign: "left" | "center" | "right" | "justify";
}

const Template: StoryFn<StoryProps> = ({ variant, textAlign }) => (
  <Divider variant={variant} textAlign={textAlign} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: "fullWidth",
  textAlign: "center",
};
