import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Running Test for Disabled", () => {
  test("Check Dropdown ", () => {
    render(<Dropdown default="1" $items={["1", "2"]} disabled={true} />);
    expect(screen.getByDisplayValue("1")).toBeDisabled();
  });

  test("Check Dropdown not Visible ", () => {
    render(<Dropdown default="2" $items={["1", "2"]} />);
    expect(screen.getByDisplayValue("2")).toBeVisible();
  });
});
