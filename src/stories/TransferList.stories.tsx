import React from "react";

import { StoryFn } from "@storybook/react";
import TransferList, { TransferListProps } from "@/app/components/TransferList";
export default {
  title: "TransferList",
  component: TransferList,
};
const Template: StoryFn<TransferListProps> = (args: TransferListProps) => (
  <TransferList {...args} />
);
export const ItemList = Template.bind({});
ItemList.args = {
  items: ["Joelle", "Monica", "Freya"],
  onTransfer: (item: string, direction: "left" | "right") => {
    console.log(`Transferring ${item} to ${direction}`);
  },
};
