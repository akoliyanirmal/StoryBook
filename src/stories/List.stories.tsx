import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import List from "@/app/components/List";

export default {
  title: "Components/List",
  component: List,
} as Meta;

const Template: StoryFn = () => <List />;

export const ListItem = Template.bind({});
