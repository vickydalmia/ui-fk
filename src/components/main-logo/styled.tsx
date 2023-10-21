import styled from "styled-components";

const MainLogoWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 752px;
  margin: 0 auto;
`;

const MainLogoLeftContainer = styled.div`
  border: 1px solid #dadce0;
  border-radius: 4px;
  position: relative;
  height: 119px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainLogoLeftImage = styled.img`
  max-width: 40%;
`;

const MainLogoRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainLogoLeftLink = styled.a`
  cursor: pointer;
  font-size: 10px;
  line-height: ${16 / 12};
  color: #5f6368;
  text-decoration: underline;
  position: absolute;
  top: 8px;
  right: 16px;
`;

const MainLogoLeftInput = styled.input`
  display: none;
`;

const MainRightHeading = styled.h3`
  font-size: 14px;
  line-height: ${18 / 14};
  font-weight: 500;
  color: #3c4043;
`;

const MainRightDesc = styled.p`
  font-size: 14px;
  line-height: ${18 / 14};
  font-weight: 400;
  color: #5f6368;
  margin-top: 5px;
`;

const MainRightError = styled.p`
  font-size: 12px;
  line-height: ${16 / 12};
  font-weight: 400;
  color: #d7242e;
  margin-top: 5px;
`;

MainLogoWrapper.displayName = "MainLogoWrapper";
MainLogoLeftContainer.displayName = "MainLogoLeftContainer";
MainLogoLeftImage.displayName = "MainLogoLeftImage";
MainLogoRight.displayName = "MainLogoRight";
MainLogoLeftLink.displayName = "MainLogoLeftLink";
MainLogoLeftInput.displayName = "MainLogoLeftInput";
MainRightHeading.displayName = "MainRightHeading";
MainRightDesc.displayName = "MainRightDesc";
MainRightError.displayName = "MainRightError";

export {
  MainLogoWrapper,
  MainLogoLeftImage,
  MainLogoLeftContainer,
  MainLogoRight,
  MainLogoLeftLink,
  MainLogoLeftInput,
  MainRightHeading,
  MainRightDesc,
  MainRightError,
};
