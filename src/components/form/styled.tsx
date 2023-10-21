import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 24px auto 0;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  gap: 24px;
  width: 752px;
  margin: 0 auto;
`;
const CheckboxWrapper = styled.div`
  display: flex;
  width: 50%;
  margin-left: auto;
  align-items: center;
  padding-left: 10px;
`;
const CheckboxLabel = styled.span`
  font-size: 14px;
  line-height: ${18 / 14};
  color: #3c4043;
  margin-left: 10px;
`;
Wrapper.displayName = "Wrapper";
Row.displayName = "Row";
CheckboxWrapper.displayName = "ChecboxWrapper";
CheckboxLabel.displayName = "CheckboxLabel";

export { Wrapper, Row, CheckboxWrapper, CheckboxLabel };
