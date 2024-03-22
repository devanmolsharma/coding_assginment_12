import styled from "styled-components";
import Props from "./Card.types";

const CardBase = styled.div<Props>`
  padding: 10px;
  margin: 5px;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  border: 1px solid grey;
  max-height: 500px;
  max-width: 500px;
  opacity: ${(props) =>
    props.disabled == true ? 0.7 : props.$backgroundColor ?? 1};
  background-color: ${(props) =>
    props.disabled == true ? "grey" : props.$backgroundColor ?? "white"};
  pointer-events: none;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 350px;
  }
  &:hover {
    ${(props) => !props.disabled && "filter: brightness(0.9);"}
    cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};
  }
`;

export default function Card(props: Props) {
  return (
    <CardBase {...props}>
      {props.imageUrl && <img src={props.imageUrl} alt="Card-Image" />}
      <h3>{props.title ?? "Title"}</h3>
      <div>{props.content ?? "Content"}</div>
    </CardBase>
  );
}
