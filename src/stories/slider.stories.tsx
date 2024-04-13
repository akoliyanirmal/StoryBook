import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Slider from "@/app/components/slider";

export default {
  title: "Slider",
  component: Slider,
} as Meta;

const Template: StoryFn = (args) => <Slider min={0} max={0} {...args} />;

export const SliderLine = Template.bind({});
SliderLine.args = {
  min: 0,
  max: 100,
  step: 1,
};
