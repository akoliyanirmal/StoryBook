import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomButtonGroup from "@/app/components/ButtonGroup";

export default {
  title: "ButtonGroup",
  component: CustomButtonGroup,
} as Meta;

const Template: StoryFn<any> = (args) => (
  <CustomButtonGroup {...args}>
    <button>One</button>
    <button>Two</button>
    <button>Three</button>
  </CustomButtonGroup>
);

export const Default = Template.bind({});
Default.args = {};

export const WithProps = Template.bind({});
WithProps.args = {
  children: [
    <button key={1}>One</button>,
    <button key={2}>Two</button>,
    <button key={3}>Three</button>,
  ],
  color: "primary",
  disabled: false,
  fullWidth: false,
  orientation: "horizontal",
  size: "medium",
  variant: "contained",
};
