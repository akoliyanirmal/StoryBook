import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Drawer from "@/app/components/Drawer";

export default {
  title: "Drawer",
  component: Drawer,
} as Meta;

const Template: StoryFn = (args) => <Drawer {...args} />;

export const DrawerWithAnchor = Template.bind({});
DrawerWithAnchor.args = {
  anchor: "right",
};
