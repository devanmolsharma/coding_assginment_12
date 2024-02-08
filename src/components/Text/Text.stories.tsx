import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "MyComponents/Text",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Simple: Story = (args) => (
  <Text data-testId="Text-id" {...args} />
);

Simple.args = {
  disabled: false,
  $text:"Hola!",
  $backgroundColor:'white'
};