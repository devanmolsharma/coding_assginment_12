import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import RadioButton from "./RadioButton";
import React from "react";

describe("Running Test for RadioButton", () => {
  test("Check RadioButton Disabled", () => {
    render(<RadioButton $label="Label" disabled id="RadioButton1" />);
    const element = document.getElementById("RadioButton1")!;
    expect(element).toHaveStyle("background-color:grey");
  });

  test("Check RadioButton Visible", () => {
    render(<RadioButton $label="Label" id="RadioButton2" />);
    expect(document.getElementById("RadioButton2")).toBeVisible();
  });
});
