import styled from "styled-components";

const MainArea = styled.div`
  display: flex;
  height: calc(100% - 64px);
  background-color: #fdffff;
`;

const BelowMainArea = styled.div`
  width: 100%;
  padding: 24px;
`;

const RightSectionHeader = styled.div`
  min-height: 49px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  align-items: center;
  background-color: #fff;
`;
const RightSectionHeading = styled.h1`
  font-size: 20px;
  line-height: ${25 / 20};
  font-weight: 500;
  color: #3c4043;
  margin-left: 25px;
`;

const RightBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AccordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccordTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: ${25 / 20};
  color: #3c4043;
`;

const AccordDesc = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: ${18 / 12};
  color: #5f6368;
  margin-top: 5px;
`;

const AccordBody = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: ${20 / 14};
  color: #5f6368;
  margin-top: 10px;
`;

const Footer = styled.div`
  display: flex;
  margin-top: 60px;
`;
const FooterImg = styled.img`
  width: 181px;
`;

MainArea.displayName = "MainArea";
RightSectionHeader.displayName = "RightSectionHeader";
RightSectionHeading.displayName = "RightSectionHeading";
RightBar.displayName = "RightBar";
BelowMainArea.displayName = "BelowMainArea";
AccordTitle.displayName = "AccordTitle";
AccordDesc.displayName = "AccordDesc";
AccordWrapper.displayName = "AccordWrapper";
AccordBody.displayName = "AccordBody";
Footer.displayName = "Footer";
FooterImg.displayName = "FooterImg";

export {
  MainArea,
  RightSectionHeader,
  RightSectionHeading,
  RightBar,
  BelowMainArea,
  AccordTitle,
  AccordDesc,
  AccordWrapper,
  AccordBody,
  Footer,
  FooterImg,
};
