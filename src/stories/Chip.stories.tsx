import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Chip, { ChipProps } from "@/app/components/Chip";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
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
          "purple",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["medium", "small", "large"],
      },
    },
    avatar: {
      control: "text",
    },
  },
} as Meta;

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  label: "Chip Filled",
  color: "primary",
  size: "medium",
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  label: "Chip with Avatar",
  color: "primary",
  size: "medium",
  avatar:
    "https://t3.ftcdn.net/jpg/05/73/64/48/360_F_573644872_OzN4BzLY3BKNZoAPjP8NQIUM38HI4fyC.jpg",
};
