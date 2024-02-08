import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "MyComponents/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button data-testId="Button-id" {...args} />
);

Primary.args = {
  disabled: false,
  $backgroundColor: "blue",
  label:'Button'
};