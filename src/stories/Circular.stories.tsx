import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Circular, { CircularProps } from "@/app/components/Circular";

export default {
  title: "Circular",
  component: Circular,
  argTypes: {
    size: {
      control: {
        type: "range",
        min: 10,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: "color",
    },
  },
} as Meta;

const Template: StoryFn<CircularProps> = (args) => <Circular {...args} />;

export const Default = Template.bind({});
Default.args = {};
