import React from "react";

import { StoryFn } from "@storybook/react";
import Alert, { AlertProps } from "@/app/components/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
};
const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;
export const Success = Template.bind({});
Success.args = {
  type: "success",
  title: "Success Alert",
};
