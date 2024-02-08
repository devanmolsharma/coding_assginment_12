import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "MyComponents/Card",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Simple: Story = (args) => (
  <Card data-testId="Card-id" {...args} />
);

Simple.args = {
  disabled: false,
  title:'Card Title',
  content:"test",
  imageUrl:"https://picsum.photos/200/300"
};