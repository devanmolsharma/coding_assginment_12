import React from "react";
import '@testing-library/jest-dom'
import {fireEvent, render, screen } from '@testing-library/react' 
import Img from "./Img";

describe("Running Test for Img", () => {

  test("Check Img Disabled", () => {
    render(<Img src="https://picsum.photos/200/300" alt="Test Img 1" disabled id="Img1"/>)
    const element = document.getElementById('Img1')!;
    expect(element).toHaveStyle("background-color:grey");
  });

  test("Check Img Visible", () => {
    render(<Img src="https://picsum.photos/200/300" alt="Test Img 2" id="Img2"/>)
    expect(document.getElementById('Img2')).toBeVisible();
  });
});