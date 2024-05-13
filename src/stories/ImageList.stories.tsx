import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ImageList, { ImageListProps } from "@/app/components/ImageList";

export default {
  title: "Components/ImageList",
  component: ImageList,
} as Meta;

const Template: StoryFn<ImageListProps> = (args) => <ImageList {...args} />;

export const images = Template.bind({});
images.args = {
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
    "https://i.natgeofe.com/n/726708f7-f79d-47a5-ba03-711449823607/01-balance-of-nature_3x2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1200px-Hopetoun_falls.jpg",
    "https://sotp.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/04/mark-koch-KiRlN3jjVNU-unsplash-637x425.jpeg",
    "https://img-4.linternaute.com/0efC7-fKD0qAHCUcChtSVXT9Ego=/1500x/smart/43f787f117784c3fa9a928194bd91d5e/ccmcms-linternaute/12325430.jpg",
    "https://img.freepik.com/premium-zdjecie/lodz-na-jeziorze-z-gorami-w-tle_865967-5725.jpg",
  ],
};
