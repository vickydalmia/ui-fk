import {
    AccountHolder,
  Border,
  BrandInfoWrapper,
  HeadingOne,
  HeadingTwo,
  HeadingTwoWrapper,
  Logo,
  LogoWrapper,
  RightActions,
  RightIconImage,
  RightIconImageExtra,
  RightIconText,
  RightIconWrapper,
  Wrapper,
} from "./styled";
import logo from "../../assets/logo.png";
import dropDownIcon from "../../assets/drop-down.svg";
import help from "../../assets/help.svg";
import notification from "../../assets/notification.svg";

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
        <Border />
      </LogoWrapper>
      <BrandInfoWrapper>
        <HeadingOne>Pay Cycle: 31-May-2021 to 31-June-2021</HeadingOne>
        <HeadingTwoWrapper>
          <HeadingTwo>Amazon India Pvt Ltd</HeadingTwo>
          <img src={dropDownIcon} />
        </HeadingTwoWrapper>
      </BrandInfoWrapper>
      <RightActions>
        <RightIconWrapper>
          <RightIconImage src={help} alt="help" />
          <RightIconText>SUPPORT</RightIconText>
        </RightIconWrapper>
        <RightIconWrapper>
          <RightIconImage src={notification} alt="notification" />
          <RightIconImageExtra />
          <RightIconText>NOTIFICATIONS</RightIconText>
        </RightIconWrapper>
        <AccountHolder>R</AccountHolder>
      </RightActions>
    </Wrapper>
  );
};

export default Header;
