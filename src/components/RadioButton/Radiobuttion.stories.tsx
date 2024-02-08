import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: "MyComponents/RadioButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Simple: Story = (args) => (
  <RadioButton data-testId="RadioButton-id" {...args} />
);

Simple.args = {
  disabled: false,
  $label:"Hola!"
};