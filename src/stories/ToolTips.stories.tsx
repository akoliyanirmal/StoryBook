import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ToolTips, { ToolTipsProps } from "@/app/components/Tooltip";

export default {
  title: "Components/ToolTips",
  component: ToolTips,
} as Meta;

const Template: StoryFn<ToolTipsProps> = (args) => <ToolTips {...args} />;

export const ToolTipsButton = Template.bind({});
ToolTipsButton.args = {
  onClick: action("ToolTips Clicked"),
};
