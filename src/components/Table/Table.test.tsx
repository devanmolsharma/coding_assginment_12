import React from "react";
import '@testing-library/jest-dom'
import {fireEvent, render, screen } from '@testing-library/react' 
import {Table} from "./Table";

describe("Running Test for Table", () => {

  test("Check Table Disabled", () => {
    render(<Table disabled id="Table1"/>)
    const element = document.getElementById('Table1')!;
    expect(element).toHaveStyle("background-color:grey");
  });

  test("Check Table Visible", () => {
    render(<Table id="Table2"/>)
    expect(document.getElementById('Table2')).toBeVisible();
  });
});