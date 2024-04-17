import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextField from "@/app/components/Input";

export default {
  title: "Components/TextField",
  component: TextField,

  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },

    disableUnderline: {
      control: { type: "boolean" },
    },

    hiddenLabel: {
      control: { type: "boolean" },
    },

    id: {
      control: { type: "text" },
    },

    margin: {
      options: ["dense", "none"],
      control: { type: "select" },
    },

    placeholder: {
      control: { type: "text" },
    },

    required: {
      control: { type: "boolean" },
    },

    type: {
      control: { type: "text" },
    },

    // onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  // const [value, setValue] = useState(args.value || "");
  return (
    <TextField
      {...args}
      // value={value}
      // onChange={(e) => {
      //   setValue(e.target.value);
      //   args.onChange(e);
      // }}
    />
  );
};

export const Input = Template.bind({});
Input.args = {
  id: "text-field",
  label: "Text Field",
  placeholder: "Enter text",
  margin: "none",
  disableUnderline: false,
  hiddenLabel: false,
  disabled: false,
  required: false,
  type: "text",
};
