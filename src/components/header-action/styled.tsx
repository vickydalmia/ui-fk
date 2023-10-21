import styled from "styled-components";

const HeaderActionWrapper = styled.div`
  display: flex;
  width: calc(100% - 26px);
  padding: 26px 0 26px 0;
  margin-left: 26px;
  border-bottom: 1px solid #005ba6;
`;

const HeaderActionTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderActionTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: ${25 / 20};
  color: #3c4043;
`;

const HeaderActionDesc = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: ${18 / 12};
  color: #5f6368;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-left: auto;
`;
const UpButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #f2f6ff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 26px;
`;
const UpButtonIcon = styled.img`
  transform: rotate(180deg);
  max-width: 50%;
`;

HeaderActionWrapper.displayName = "HeaderActionWrapper";
HeaderActionTitle.displayName = "HeaderActionTitle";
HeaderActionDesc.displayName = "HeaderActionDesc";
HeaderActionTitleBox.displayName = "HeaderActionTitleBox";
ButtonGroup.displayName = "ButtonGroup";
UpButton.displayName = "UpButton";
UpButtonIcon.displayName = "UpButtonIcon";
export {
  HeaderActionWrapper,
  HeaderActionTitle,
  HeaderActionTitleBox,
  HeaderActionDesc,
  ButtonGroup,
  UpButton,
  UpButtonIcon,
};
