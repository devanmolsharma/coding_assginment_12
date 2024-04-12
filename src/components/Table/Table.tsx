'use client'
import styled from "styled-components";
import Props from "./Table.types";

// Table Component
export const Table = styled.table<Props>`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: ${(props) =>
    props.disabled == true ? "grey" : props.$backgroundColor ?? "white"};

  &:hover {
    cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};
  }
  * {
    pointer-events: ${(props) => (props.disabled == true ? "none" : "all")};
  }
`;

// Table Header Component
export const TableHeader = styled.thead`
  background-color: #f2f2f2;
  font-weight: bold;
`;

// Table Row Component
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #e6e6e6;
  }
`;
// Table Cell Component
export const TableCell = styled.td`
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
`;

// Table Footer Component
export const TableFooter = styled.tfoot`
  background-color: #f2f2f2;
`;
