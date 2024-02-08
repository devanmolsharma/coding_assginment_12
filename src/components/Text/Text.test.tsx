import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react' 
import Text from "./Text";

describe("Running Test for Text", () => {

  test("Check Text Disabled", () => {
    render(<Text $backgroundColor="blue" $text="Test Text 1" disabled/>)
    expect(screen.getByText('Test Text 1')).toHaveStyle("background-color:grey");
  });

  test("Check Text Visible", () => {
    render(<Text $backgroundColor="blue" $text="Test Text 2"/>)
    expect(screen.getByText('Test Text 2')).toBeVisible();
  });
});