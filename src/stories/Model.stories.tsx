import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from "@/app/components/Model";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn = () => <Modal />;

export const OpenModel = Template.bind({});
