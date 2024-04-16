// Input.stories.tsx

import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextField from "@/app/components/Input";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    autoComplete: {
      control: { type: "text" },
    },
    autoFocus: {
      control: { type: "boolean" },
    },
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    disableUnderline: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    hiddenLabel: {
      control: { type: "boolean" },
    },
    id: {
      control: { type: "text" },
    },
    inputRef: {
      control: { type: "object" },
    },
    margin: {
      options: ["dense", "none"],
      control: { type: "select" },
    },
    maxRows: {
      control: { type: "text" },
    },
    multiline: {
      control: { type: "boolean" },
    },
    name: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    required: {
      control: { type: "boolean" },
    },
    rows: {
      control: { type: "text" },
    },
    type: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
    />
  );
};

export const Input = Template.bind({});
Input.args = {
  id: "text-field",
  label: "Text Field",
  placeholder: "Enter text",
  value: "",
  margin: "none",
  color: "primary",
  disableUnderline: false,
  hiddenLabel: false,
  autoComplete: "on",
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  inputRef: null,
  maxRows: "",
  multiline: false,
  name: "",
  required: false,
  rows: "",
  type: "text",
};
