import styled from "styled-components";
import Props from "./Text.types";

const BaseText = styled.div<Props>`
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

export default function Text(props: Props) {
  return <BaseText {...props}>{props.$text ?? "Text"}</BaseText>;
}
