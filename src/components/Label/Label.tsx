import styled from "styled-components";
import Props from "./Label.types";

const BaseLabel = styled.label<Props>`
  padding: 10px;
  margin: 5px;
  font-weight: bolder;
  border: none;
  background-color: ${(props) =>
    props.disabled == true ? "grey" : props.$backgroundColor ?? "white"};

  &:hover {
    cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};
  }
`;

export default function Label(props: Props) {
  return <BaseLabel {...props}>{props.$text ?? "Label"}</BaseLabel>;
}
