import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Img from "./Img";

const meta: Meta<typeof Img> = {
  component: Img,
  title: "MyComponents/Img",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Simple: Story = (args) => <Img data-testId="Img-id" {...args} />;

Simple.args = {
  disabled: false,
  src: "https://picsum.photos/200/300",
  alt: "This is the description",
};
