import styled from "styled-components";

const DateOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;
const DateWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const NativeDate = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  &::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`;

const DesignDiv = styled.div`
  background: #fff;
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 12px 16px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  line-height: ${18 / 16};
  color: #dadce0;
  ${NativeDate}:focus + &{
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const Label = styled.div`
  font-size: 14px;
  line-height: ${18 / 14};
  color: #5f6368;
  margin-bottom: 8px;
  font-weight: 500;
`;
const Calender = styled.img`
  position: absolute;
  right: 16px;
  top:10px;
  pointer-events: none;
`;

DateWrapper.displayName = "DateWrapper";
NativeDate.displayName = "NativeDate";
DesignDiv.displayName = "DesignDiv";
Label.displayName = "Label";
DateOuterWrapper.displayName = "DateOuterWrapper";
Calender.displayName = "Calender";

export {
  DateWrapper,
  NativeDate,
  DesignDiv,
  Label,
  DateOuterWrapper,
  Calender,
};
