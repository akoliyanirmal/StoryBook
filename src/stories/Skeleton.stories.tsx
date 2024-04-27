import React from "react";
import { StoryFn } from "@storybook/react";
import Skeleton, { SkeletonProps } from "@/app/components/Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
};
const Template: StoryFn<SkeletonProps> = (args) => <Skeleton {...args} />;
export const Default = Template.bind({});
