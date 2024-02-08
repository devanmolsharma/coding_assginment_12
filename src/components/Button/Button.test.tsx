import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react' 
import Button from "./Button";

describe("Running Test for Button", () => {

  test("Check Button Disabled", () => {
    render(<Button label="Test Button 1" disabled={true}/>)
    expect(screen.getByRole('button',{name:"Test Button 1"})).toBeDisabled();
  });

  test("Check Button Visible", () => {
    render(<Button label="Test Button 2"/>)
    expect(screen.getByRole('button',{name:"Test Button 2"})).toBeVisible();
  });
});