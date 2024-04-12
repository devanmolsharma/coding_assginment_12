'use client'
import styled from "styled-components";
import Props from "./Img.types";

const BaseImage = styled.img<Props>`
  padding: 10px;
  margin: 5px;
  font-weight: bolder;
  border: none;
  background-color: ${(props) => (props.disabled == true ? "grey" : "white")};

  &:hover {
    ${(props) => !props.disabled && "filter: brightness(0.8);"}
    cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};
  }
`;

export default function Img(props: Props) {
  return <BaseImage {...props} />;
}
