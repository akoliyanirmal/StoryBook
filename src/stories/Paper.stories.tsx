import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Paper, { PaperProps } from "@/app/components/Paper";

export default {
  title: "Example/Paper",
  component: Paper,
  argTypes: {
    title: { control: { type: "text" } },
  },
} as Meta;

const Template: StoryFn<PaperProps> = (args) => <Paper {...args} />;

export const Papers: StoryFn<PaperProps> = Template.bind({});
Papers.args = {
  title: "This is a paper component",
};
