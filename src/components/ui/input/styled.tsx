import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

const InputBase = styled.input`
  background: #fff;
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 12px 16px;

  &::placeholder {
    font-size: 16px;
    line-height: ${18 / 16};
    color: #dadce0;
  }
`;

const Label = styled.div`
  font-size: 14px;
  line-height: ${18 / 14};
  color: #5f6368;
  margin-bottom: 8px;
  font-weight: 500;
`;

InputWrapper.displayName = "InputWrapper";
Label.displayName = "Label";
InputBase.displayName = "InputBase";

export { InputWrapper, Label, InputBase };
