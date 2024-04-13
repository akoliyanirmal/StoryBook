import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Avatar, { AvatarProps } from "@/app/components/avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    src: {
      control: { type: "text" },
    },
    alt: {
      control: { type: "text" },
    },
  },
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Image = Template.bind({});
Image.args = {
  src: "https://i0.wp.com/www.tripstodiscover.com/wp-content/uploads/2016/08/bigstock-Giant-Panda-Sad-Tired-Bore-81842441-1.jpg?resize=784%2C588",
  alt: "Avatar",
  size: "medium",
};
