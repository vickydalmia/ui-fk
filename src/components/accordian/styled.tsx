import styled from "styled-components";

const AccordianWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dadce0;
  margin: auto;
  padding: 24px 0;
`;

const AccordianHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AccordianButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #f2f6ff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AccordianBody = styled.div`
  width: 100%;
`;

const AccordianButtonIcon = styled.img<{ showBody: boolean }>`
  max-width: 50%;
  transform: ${({ showBody }) => (showBody ? "rotate(180deg)" : null)};
`;

AccordianWrapper.displayName = "AccordianWrapper";
AccordianHeader.displayName = "AccordianHeader";
AccordianButton.displayName = "AccordianButton";
AccordianButtonIcon.displayName = "AccordianButtonIcon";
AccordianBody.displayName = "AccordianBody";

export {
  AccordianWrapper,
  AccordianHeader,
  AccordianButton,
  AccordianButtonIcon,
  AccordianBody,
};
