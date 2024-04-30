import React from "react";
import { StoryFn } from "@storybook/react";
import BottomNavigation from "@/app/components/Bottom";

export default {
  title: "Components/BottomNavigation",
  component: BottomNavigation,
  argTypes: {
    recentsLabel: {
      control: { type: "text" },
      defaultValue: "Recents",
    },
    favoriteLabel: {
      control: { type: "text" },
      defaultValue: "Favorite",
    },
    nearbyLabel: {
      control: { type: "text" },
      defaultValue: "Nearby",
    },
  },
};

interface BottomNavigationProps {
  recentsLabel: string;
  favoriteLabel: string;
  nearbyLabel: string;
}

const Template: StoryFn<BottomNavigationProps> = (args) => (
  <BottomNavigation {...args} />
);

export const Navigation = Template.bind({});
Navigation.args = {
  recentsLabel: "Recents",
  favoriteLabel: "Favorite",
  nearbyLabel: "Nearby",
};
