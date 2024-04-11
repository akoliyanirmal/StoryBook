import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from "../app/components/Input";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

const Template: StoryFn<InputProps> = (args: any) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text...",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Enter password...",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  placeholder: "Enter number...",
};
