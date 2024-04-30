import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Breadcrumbs, { BreadcrumbsProps } from "@/app/components/Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    links: {
      control: {
        type: "object",
      },
    },
  },
} as Meta;

const Template: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  links: [
    { text: "Home", href: "/" },
    { text: "Products", href: "/products" },
    { text: "Category", href: "/products/category" },
    { text: "Product", href: "/products/category/product" },
  ],
};
