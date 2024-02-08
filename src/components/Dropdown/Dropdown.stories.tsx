import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "MyComponents/Dropdown",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Simple: Story = (args) => (
  <Dropdown data-testId="Dropdown-id" {...args} />
);

Simple.args = {
  disabled: false,
  default:'Option1',
  $items:['Option1','Option2','Option3'],
  $backgroundColor:'white'
};