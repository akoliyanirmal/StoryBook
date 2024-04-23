import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Avatar, { AvatarProps } from "@/app/components/Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    variant: {
      control: { type: "select", options: ["circular", "rounded", "square"] },
    },
  },
} as Meta;
const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;
export const Avatars = Template.bind({});
Avatars.args = {
  src: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  alt: "User Avatar",
  variant: "circular",
};
