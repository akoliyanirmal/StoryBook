import Stack, { StackProps } from "@/app/components/Stack";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

export default {
  title: "Components/Stack",
  component: Stack,
} as Meta;

const Template: StoryFn<StackProps> = (args) => (
  <Stack {...args}>
    <div className="bg-gray-200 h-8">Item 1</div>
    <div className="bg-gray-200 h-8">Item 2</div>
    <div className="bg-gray-200 h-8">Item 3</div>
  </Stack>
);

export const Default = Template.bind({});
Default.args = {};
