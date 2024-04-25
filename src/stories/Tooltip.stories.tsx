import React from "react";
import { Meta } from "@storybook/react";

import { MdDelete } from "react-icons/md";
import Tooltip from "@/app/components/Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta;

const Template = (args: any) => (
  <Tooltip>
    <MdDelete className="text-gray-600 group-hover:text-red-500 text-4xl" />
  </Tooltip>
);

export const Default = Template.bind({});
