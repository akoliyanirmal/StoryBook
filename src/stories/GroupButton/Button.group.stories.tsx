import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ButtonGroup from "@/app/components/Button.group";
import { Buttons } from "@/app/components/Buttons";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
} as Meta;

const Template: StoryFn = ({ options, onClick, size, ...args }) => (
  <ButtonGroup>
    <Buttons options={options} onClick={onClick} size={size} />{" "}
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  onClick: (option: string) => console.log("Clicked:", option),
  size: "medium",
};
