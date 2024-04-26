import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { MdDelete } from "react-icons/md";
import Tooltip from "@/app/components/Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: [
          "top",
          "bottom",
          "left",
          "right",
          "bottom-end",
          "bottom-start",
          "left-end",
          "left-start",
          "right-end",
          "right-start",
          "top-end",
          "top-start",
        ],
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Tooltip {...args}>
    <MdDelete className="text-gray-600 group-hover:text-red-500 text-4xl" />
  </Tooltip>
);

export const Tools = Template.bind({
  placement: "left",
});
