import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HeroImage from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  component: HeroImage,
  title: "MyComponents/HeroImage",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Simple: Story = (args) => (
  <HeroImage data-testId="HeroImage-id" {...args} />
);

Simple.args = {
  disabled: false,
  src:"https://picsum.photos/500/200",
  alt:'This is the description'
};