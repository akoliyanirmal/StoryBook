import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Accordion from "@/app/components/Accordion";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
  },
} as Meta;

const Template: StoryFn<{ title: string; content: string }> = (args) => (
  <Accordion {...args}>
    <p className="text-gray-600">{args.content}</p>{" "}
  </Accordion>
);

export const Accordions = Template.bind({});
Accordions.args = {
  title: "Accordion Title",
  content:
    "Nature is all the animals, plants, and other things in the world that are not made by people, and all the events and processes that are not caused by people. The most amazing thing about nature is its infinite variety. ... grasses that grow wild in nature.",
};
