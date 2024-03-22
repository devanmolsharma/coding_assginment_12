import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Running Test for Label", () => {
  test("Check Label Disabled", () => {
    render(<Label $backgroundColor="blue" $text="Test Label 1" disabled />);
    expect(screen.getByText("Test Label 1")).toHaveStyle(
      "background-color:grey",
    );
  });

  test("Check Label Visible", () => {
    render(<Label $backgroundColor="blue" $text="Test Label 2" />);
    expect(screen.getByText("Test Label 2")).toBeVisible();
  });
});
