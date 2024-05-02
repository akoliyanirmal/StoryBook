import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Pagination from "@/app/components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "standard"],
      },
    },
    shape: {
      control: {
        type: "select",
        options: ["circular", "rounded"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} as Meta;

interface PaginationStoryProps {
  color: "primary" | "secondary" | "standard";
  shape: "circular" | "rounded";
  size: "small" | "medium" | "large";
}

const Template: StoryFn<PaginationStoryProps> = (args) => (
  <Pagination {...args} />
);

export const PaginationNumber = Template.bind({});
PaginationNumber.args = {
  color: "standard",
  shape: "rounded",
  size: "medium",
};
