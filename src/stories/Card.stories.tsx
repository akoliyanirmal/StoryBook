import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Card, { CardProps } from "@/app/components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    date: { control: "text" },
    imageUrl: { control: "text" },
    description: { control: "text" },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const PizzaCard = Template.bind({});
PizzaCard.args = {
  title: "Pizza",
  date: "April 29, 2024",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
  description:
    "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly usually, in a commercial setting, using a wood-fired oven heated to a very high temperature and served hot.",
};
