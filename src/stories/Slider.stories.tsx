import React from "react";
import { StoryFn } from "@storybook/react";
import Slider, { SliderProps } from "@/app/components/Slider";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      defaultValue: 50,
    },
    onChange: { action: "changed" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
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
  },
};

const Template: StoryFn<SliderProps> = ({ value, onChange, size, color }) => (
  <Slider value={value} onChange={onChange} size={size} color={color} />
);

export const SoundSlider = Template.bind({});
SoundSlider.args = { size: "medium", color: "primary" };
