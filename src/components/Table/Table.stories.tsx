import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "./Table";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "MyComponents/Table",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Table>;

const generateFakeData = (rows, columns) => {
  const data:string[][] = [];
  for (let i = 0; i < rows; i++) {
    let rowData:string[] = [];
    for (let j = 0; j < columns; j++) {
      rowData.push(`Row ${i + 1}, Cell ${j + 1}`);
    }
    data.push(rowData);
  }
  return data;
};

export const Simple: Story = (args) => {
  const fakeData = generateFakeData(5, 3); // Generate 5 rows with 3 columns of fake data
  return (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
          <TableCell>Header 3</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {fakeData.map((rowData, index) => (
          <TableRow key={index}>
            {rowData.map((cellData, cellIndex) => (
              <TableCell key={cellIndex}>{cellData}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

Simple.args = {
  disabled: false,
};
