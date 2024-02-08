import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "MyComponents/Label",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Simple: Story = (args) => (
  <Label data-testId="Label-id" {...args} />
);

Simple.args = {
  disabled: false,
  $text:"Hola!",
  $backgroundColor:'white'
};