import styled from "styled-components";
import Props from "./HeroImage.types";

const BaseImage = styled.img<Props>`
  padding: 10px;
  margin: 5px;
  width: 90vw;
  margin: auto;
  font-weight: bolder;
  border: none;
  background-color: ${(props) => (props.disabled == true ? "grey" : "white")};

  &:hover {
    ${(props) => !props.disabled && "filter: brightness(0.8);"}
    cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};
  }
`;

const HeroImg: React.FC<Props> = (props: Props) => {
  return <BaseImage {...props} />;
};

export default HeroImg;
