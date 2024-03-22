import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Running Test for Card", () => {
  test("Check Card Disabled", () => {
    render(
      <Card $backgroundColor="blue" title="Test Card 1" disabled id="Card1" />,
    );
    const element = document.getElementById("Card1")!;
    expect(element).toHaveStyle("background-color:grey");
  });

  test("Check Card Visible", () => {
    render(<Card $backgroundColor="blue" title="Test Card 2" id="Card2" />);
    expect(document.getElementById("Card2")).toBeVisible();
  });
});
