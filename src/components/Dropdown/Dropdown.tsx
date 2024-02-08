import styled from "styled-components";
import Props from "./Dropdown.types";

const DropdownBase = styled.select<Props>`
  padding: 10px;
  margin: 5px;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  border: 1px solid grey;
  max-height: 500px;
  max-width: 500px;
  opacity: ${(props) =>
    props.disabled == true ? 0.7 : props.$backgroundColor??1};
  background-color: ${(props) =>
    props.disabled == true ? "grey" : props.$backgroundColor??"white"};

  &:hover {
    cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};
  }
`;

export default function Dropdown(props: Props) {
  return (
    <DropdownBase {...props} defaultValue={props.default}>
     {props.$items?.map((item)=>(<option key={item} onClick={()=>props.$onChange && props.$onChange(item)}>{item}</option>))}
    </DropdownBase>
  );
}
