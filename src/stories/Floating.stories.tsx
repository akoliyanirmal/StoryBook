import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Fab, { FabProps } from "@/app/components/Floating";

export default {
  title: "Components/Fab",
  component: Fab,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: StoryFn<FabProps> = (args) => <Fab {...args} />;

export const FloatingButton = Template.bind({});
FloatingButton.args = {
  onClick: action("Icon Clicked"),
  backgroundColor: "lightslategray",
};
