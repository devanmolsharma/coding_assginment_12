import styled from "styled-components";
import "./RadioButton.types";
// Styled radio button
const RadioButton = styled.input<Props>`
  margin: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.disabled ? "grey" : "black")};
  background-color: ${(props) => (props.disabled ? "grey" : "white")};

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

// Wrapper component for the radio button
const RadioButtonWrapper = styled.div`
  display: inline-block;
`;

// Radio button label
const RadioButtonLabel = styled.label`
  margin-left: 5px;
`;

// Radio button component
const Radio = (params: Props) => {
  return (
    <RadioButtonWrapper>
      <RadioButton type="radio" {...params} />
      <RadioButtonLabel>{params.$label}</RadioButtonLabel>
    </RadioButtonWrapper>
  );
};

export default Radio;
