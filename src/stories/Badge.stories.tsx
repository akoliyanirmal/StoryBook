import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Badge, { BadgeProps } from "@/app/components/Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    count: {
      control: {
        type: "number",
        min: -100,
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    },
    shape: {
      control: {
        type: "select",
        options: ["circular", "rectangular"],
      },
    },
  },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const BadgeIcon = Template.bind({});
BadgeIcon.args = {
  count: 0,
  color: "primary",
  shape: "circular",
};
