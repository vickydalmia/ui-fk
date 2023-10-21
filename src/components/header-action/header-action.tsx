import Button from "../button/button";
import {
  ButtonGroup,
  HeaderActionDesc,
  HeaderActionTitle,
  HeaderActionTitleBox,
  HeaderActionWrapper,
  UpButton,
  UpButtonIcon,
} from "./styled";
import uploadIcon from "../../assets/upload.svg";
import saveIcon from "../../assets/save.svg";
import arrowIcon from "../../assets/down-arrow.svg";

const HeaderAction = () => {
  return (
    <HeaderActionWrapper>
      <HeaderActionTitleBox>
        <HeaderActionTitle>Details</HeaderActionTitle>
        <HeaderActionDesc>
          Page to configure all the company details
        </HeaderActionDesc>
      </HeaderActionTitleBox>
      <ButtonGroup>
        <Button
          variant="outline"
          icon={uploadIcon}
          text="Bulk Upload"
          margin="0 24px 0 0"
        />
        <Button
          variant="fill"
          icon={saveIcon}
          text="Save"
          margin="0 24px 0 0"
        />
        <UpButton>
          <UpButtonIcon src={arrowIcon} />
        </UpButton>
      </ButtonGroup>
    </HeaderActionWrapper>
  );
};

export default HeaderAction;
