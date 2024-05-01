import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Pagination from "@/app/components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const Template: StoryFn = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
