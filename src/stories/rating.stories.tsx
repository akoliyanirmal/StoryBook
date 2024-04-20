import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Rating, { RatingProps } from "@/app/components/rating";

export default {
  title: "Components/Rating",
  component: Rating,
  argTypes: {
    totalStars: { control: { type: "number", min: 1, max: 5 } }, // Allow any number of stars greater than or equal to 1
  },
} as Meta;

const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;

export const FiveStarRating = Template.bind({});
FiveStarRating.args = {
  totalStars: 5, // Initial value for totalStars, can be adjusted dynamically
};
