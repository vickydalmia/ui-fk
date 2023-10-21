import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  height: 64px;
  border: 1px solid #dadce0;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 256px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 173px;
  margin-right: auto;
  margin-left: 25px;
`;

const Border = styled.div`
  width: 1px;
  height: 80%;
  background-color: #e8f0fd;
`;

const BrandInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const HeadingOne = styled.h3`
  font-size: 14px;
  line-height: ${18 / 14};
  color: #5f6368;
`;
const HeadingTwo = styled.h2`
  font-size: 16px;
  line-height: ${20 / 16};
  font-weight: 500;
  color: #3c4043;
  margin-right: 8px;
`;
const HeadingTwoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;
const RightActions = styled.div`
  display: flex;
  margin-left: auto;
`;

const RightIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
  position: relative;
`;
const RightIconText = styled.span`
  font-size: 10px;
  line-height: ${18 / 10};
  letter-spacing: 0.01px;
  color: #5f6368;
`;
const RightIconImage = styled.img`
  width: 24px;
`;

const RightIconImageExtra = styled.div`
  width: 6px;
  height: 6px;
  background-color: #d93025;
  position: absolute;
  border-radius: 50%;
  right: 25px;
  top: -2px;
`;

const AccountHolder = styled.div`
  width: 32px;
  height: 32px;
  background-color: #1d4d40;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 400;
  margin-right: 32px;
`;

Wrapper.displayName = "Wrapper";
LogoWrapper.displayName = "LogoWrapper";
Logo.displayName = "Logo";
Border.displayName = "Border";
BrandInfoWrapper.displayName = "BrandInfoWrapper";
HeadingOne.displayName = "HeadingOne";
HeadingTwo.displayName = "HeadingTwo";
HeadingTwoWrapper.displayName = "HeadingTwoWrapper";
RightIconWrapper.displayName = "RightIconWrapper";
RightIconText.displayName = "RightIconText";
RightActions.displayName = "RightActions";
RightIconImage.displayName = "RightIconImage";
RightIconImageExtra.displayName = "RightIconImageExtra";
AccountHolder.displayName = "AccountHolder";

export {
  Wrapper,
  Logo,
  LogoWrapper,
  Border,
  BrandInfoWrapper,
  HeadingOne,
  HeadingTwo,
  HeadingTwoWrapper,
  RightIconText,
  RightIconWrapper,
  RightActions,
  RightIconImage,
  RightIconImageExtra,
  AccountHolder,
};
