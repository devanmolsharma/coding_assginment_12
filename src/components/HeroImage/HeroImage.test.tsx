import '@testing-library/jest-dom'
import {render } from '@testing-library/react' 
import HeroImage from "./HeroImage";
import React from 'react';

describe("Running Test for HeroImage", () => {

  test("Check HeroImage Disabled", () => {
    render(<HeroImage src="https://picsum.photos/200/300" alt="Test HeroImage 1" disabled id="HeroImage1"/>)
    const element = document.getElementById('HeroImage1')!;
    expect(element).toHaveStyle("background-color:grey");
  });

  test("Check HeroImage Visible", () => {
    render(<HeroImage src="https://picsum.photos/200/300" alt="Test HeroImage 2" id="HeroImage2"/>)
    expect(document.getElementById('HeroImage2')).toBeVisible();
  });
});