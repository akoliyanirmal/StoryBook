import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dial from "@/app/components/Dial";

export default {
  title: "Components/Dial",
  component: Dial,
  argTypes: {},
} as Meta;

const Template: StoryFn = (args) => <Dial {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
