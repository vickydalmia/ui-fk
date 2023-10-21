import styled from "styled-components";

const ButtonBase = styled.button`
  border: none;
  border-radius: 4px;
  background-color: transparent;
  font-size: 16px;
  line-height: ${20 / 16};
  font-weight: 500;
  border: 1px solid transparent;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
`;

const ButtonOutline = styled(ButtonBase)`
  border: 1px solid #dadce0;
  background-color: white;
  color: #276ef1;
`;

const ButtonFill = styled(ButtonBase)`
  background-color: #276ef1;
  color: #fff;
`;

const ButtonIcon = styled.img``;
const ButtonText = styled.span``;

ButtonBase.displayName = "ButtonBase";
ButtonFill.displayName = "ButtonFill";
ButtonOutline.displayName = "ButtonOutline";
ButtonIcon.displayName = "ButtonIcon";
ButtonText.displayName = "ButtonText";

export { ButtonBase, ButtonFill, ButtonOutline, ButtonText, ButtonIcon };
