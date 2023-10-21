import styled from "styled-components";

const IconWrapper = styled.button<{ margin?: string; isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  margin: ${({ margin }) => (margin ? margin : null)};
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#ffffff" : null)};
  border-left: ${({ isSelected }) => (isSelected ? "4px solid #FD9933" : null)};
  width: 100%;
`;
const IconText = styled.span`
  font-size: 10px;
  letter-spacing: 0.01px;
  color: #5f6368;
  display: flex;
  flex-direction: column;
`;
const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;
IconWrapper.displayName = "IconWrapper";
IconImage.displayName = "IconImage";
IconText.displayName = "IconText";
export { IconWrapper, IconImage, IconText };
