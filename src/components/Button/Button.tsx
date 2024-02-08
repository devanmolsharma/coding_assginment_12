import styled from "styled-components";
import Props from "./Button.types";

const BaseButton = styled.button<Props>`
  padding: 10px;
  margin: 5px;
  color: white;
  font-weight: bolder;
  border: none;
  border-radius: 15px;
  background-color: ${(props) =>
    props.disabled == true ? "grey" : props.$backgroundColor ?? "blue"};

  &:hover {
    ${(props) => !props.disabled && "filter: brightness(0.9);"}
    cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};
  }
`;

export default function Button(props: Props) {
  return <BaseButton {...props}>{props.label ?? "Button"}</BaseButton>;
}
