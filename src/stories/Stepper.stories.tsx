import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Stepper from "@/app/components/Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
} as Meta;

const Template: StoryFn = () => <Stepper />;

export const Horizontal = Template.bind({});
