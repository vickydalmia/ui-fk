import {
  MainLogoLeftContainer,
  MainLogoLeftImage,
  MainLogoLeftInput,
  MainLogoLeftLink,
  MainLogoRight,
  MainLogoWrapper,
  MainRightDesc,
  MainRightError,
  MainRightHeading,
} from "./styled";
import oracleImage from "../../assets/oracle.png";
import { useRef } from "react";

const MainLogo = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <MainLogoWrapper>
      <MainLogoLeftContainer>
        <MainLogoLeftImage src={oracleImage} />
        <MainLogoLeftInput type="file" ref={ref} />
        <MainLogoLeftLink
          onClick={(e) => {
            e.preventDefault();
            ref.current?.click();
          }}
        >
          Change
        </MainLogoLeftLink>
      </MainLogoLeftContainer>
      <MainLogoRight>
        <MainRightHeading>Organisation Logo</MainRightHeading>
        <MainRightDesc>
          Lorem Ipsum is simply dummy text of the printing and
        </MainRightDesc>
        <MainRightError>
          Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of 1MB.
        </MainRightError>
      </MainLogoRight>
    </MainLogoWrapper>
  );
};

export default MainLogo;
