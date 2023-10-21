import styled from "styled-components";

const CheckboxWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const NativeCheckbox = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const CheckboxUi = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #dadce0;
  margin-right: 8px;
  border-radius: 4px;
  cursor: pointer;
  ${NativeCheckbox}:checked + & {
    background-color: rgb(20, 115, 230);
    border: 1px solid transparent;
  }
`;
const CheckboxUiIcon = styled.img`
  position: absolute;
  top: 0;
  pointer-events: none;
`;

CheckboxWrapper.displayName = "CheckboxWrapper";
NativeCheckbox.displayName = "NativeCheckbox";
CheckboxUi.displayName = "CheckboxUi";
CheckboxUiIcon.displayName = "CheckboxUiIcon";

export { CheckboxUi, CheckboxWrapper, NativeCheckbox, CheckboxUiIcon };
