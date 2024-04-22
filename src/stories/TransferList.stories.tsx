import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TransferList, { TransferListProps } from "@/app/components/TransferList";

export default {
  title: "Components/TransferList",
  component: TransferList,
  argTypes: {
    onTransferLeft: { action: "Transfer to Left" },
    onTransferRight: { action: "Transfer to Right" },
  },
} as Meta;

const Template: StoryFn<TransferListProps> = (args) => (
  <TransferList {...args} />
);

export const NameList = Template.bind({});
NameList.args = {
  leftItems: ["John", "Alice", "Bob", "Eve"],
  rightItems: ["Michael", "Sarah", "David", "Emily"],
};
