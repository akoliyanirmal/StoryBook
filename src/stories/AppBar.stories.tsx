import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import AppBar from "@/app/components/AppBar";

export default {
  title: "AppBar",
  component: AppBar,
  argTypes: {
    title: { control: "text" },
    color: {
      control: {
        type: "select",
        options: [
          "inherit",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    },
    position: {
      control: {
        type: "select",
        options: ["absolute", "fixed", "relative", "static", "sticky"],
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <AppBar title={""} {...args} />;

export const AppMenuBar = Template.bind({});
AppMenuBar.args = {
  title: "News",
  color: "inherit",
  position: "static",
};
