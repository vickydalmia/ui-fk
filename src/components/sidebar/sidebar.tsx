import IconButton from "../icon-button/icon-button";
import {
  SideBarNav,
  SideBarRightTab,
  SidebarRight,
  SidebarRightHeading,
  SidebarWrapper,
} from "./styled";
import dasboardIcon from "../../assets/dashboard.svg";
import configIcon from "../../assets/config.svg";
import moreIcon from "../../assets/more.svg";
import graphIcon from "../../assets/graph.svg";
import workIcon from "../../assets/work.svg";

const SideBar = () => {
  return (
    <SidebarWrapper>
      <SideBarNav>
        <IconButton
          img={dasboardIcon}
          text={<span>DashBoard</span>}
          margin="16px 0 8px"
        />
        <IconButton
          img={workIcon}
          text={
            <>
              <span>Monthly</span>
              <span>Process</span>
            </>
          }
          margin="10px 0"
        />
        <IconButton
          img={configIcon}
          text={
            <>
              <span>Super</span>
              <span>Configura.</span>
            </>
          }
          margin="10px 0"
          isSelected={true}
        />
        <IconButton
          img={graphIcon}
          text={
            <>
              <span>Master</span>
              <span>Reports</span>
            </>
          }
          margin="10px 0"
        />
        <IconButton
          img={moreIcon}
          text={<span>More</span>}
          margin="10px 0 0 0"
        />
      </SideBarNav>
      <SidebarRight>
        <SidebarRightHeading>Services Offered</SidebarRightHeading>
        <SideBarRightTab>Org Setup</SideBarRightTab>
      </SidebarRight>
    </SidebarWrapper>
  );
};

export default SideBar;
