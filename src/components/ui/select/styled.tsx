import styled from "styled-components";

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
const Label = styled.div`
  font-size: 14px;
  line-height: ${18 / 14};
  color: #5f6368;
  margin-bottom: 8px;
  font-weight: 500;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  background: #fff;
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 12px 16px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  line-height: ${18 / 16};
  color: #dadce0;
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;
Wrapper.displayName = "Wrapper";
IconWrapper.displayName = "IconWrapper";
PresentationalBit.displayName = "PresentationalBit";
NativeSelect.displayName = "NativeSelect";
SelectWrapper.displayName = "SelectWrapper";
Label.displayName = "Label";

export { Wrapper, IconWrapper, PresentationalBit, NativeSelect, SelectWrapper, Label };
