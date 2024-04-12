import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ToggleButtons from "@/app/components/toggle";

export default {
  title: "Components/ToggleButtons",
  component: ToggleButtons,
} as Meta;

const Template: StoryFn = () => <ToggleButtons />;

export const Default = Template.bind({});
