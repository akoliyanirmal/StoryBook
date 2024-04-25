import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Typography, { TypographyProps } from "@/app/components/Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "subtitle1",
          "subtitle2",
          "body1",
          "body2",
          "inherit",
        ],
      },
    },
    align: {
      // Added align control
      control: {
        type: "radio",
        options: ["inherit", "center", "justify", "left", "right"],
      },
    },
  },
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />;

export const AllVariants = () => (
  <>
    <Typography variant="h1">Heading 1 (h1)</Typography>
    <Typography variant="h2">Heading 2 (h2)</Typography>
    <Typography variant="h3">Heading 3 (h3)</Typography>
    <Typography variant="h4">Heading 4 (h4)</Typography>
    <Typography variant="h5">Heading 5 (h5)</Typography>
    <Typography variant="h6">Heading 6 (h6)</Typography>
    <Typography variant="subtitle1">Subtitle 1 (subtitle1)</Typography>
    <Typography variant="subtitle2">Subtitle 2 (subtitle2)</Typography>
    <Typography variant="body1">Body 1 (body1)</Typography>
    <Typography variant="body2">Body 2 (body2)</Typography>
    <Typography variant="inherit">Inherit</Typography>
  </>
);
