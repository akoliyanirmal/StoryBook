import BasicBreadcrumbs, {
  BasicBreadcrumbsProps,
} from "@/app/components/Breadcrumbs";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

export default {
  title: "Components/BasicBreadcrumbs",
  component: BasicBreadcrumbs,
} as Meta;

const Template: StoryFn<BasicBreadcrumbsProps> = (args) => (
  <BasicBreadcrumbs {...args} />
);

export const BasicBreadcrumb = Template.bind({});
BasicBreadcrumb.args = {
  items: [{ label: "MUI" }, { label: "Core" }, { label: "Breadcrumbs" }],
};
