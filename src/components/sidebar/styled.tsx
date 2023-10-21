import styled from "styled-components";

const SidebarWrapper = styled.div`
  background-color: #fdfeff;
  width: 256px;
  height: 200%;
  min-height: 100%;
  border-right: 1px solid #dadce0;
  display: flex;
`;

const SideBarNav = styled.nav`
  width: 72px;
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const SidebarRightHeading = styled.h3`
  font-size: 14px;
  color: #616161;
  margin-top: 22px;
  text-align: center;
`;

const SideBarRightTab = styled.div`
  background: #e8f0fd;
  border-radius: 15px 0px 0px 15px;
  height: 30px;
  width: 75%;
  position: absolute;
  right: 0;
  top: 46px;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 28px;
`;

SidebarWrapper.displayName = "SidebarWrapper";
SideBarNav.displayName = "SideBarNav";
SidebarRight.displayName = "SidebarRight";
SidebarRightHeading.displayName = "SidebarRightHeading";
SideBarRightTab.displayName = "SideBarRightTab";

export {
  SidebarWrapper,
  SideBarNav,
  SidebarRight,
  SidebarRightHeading,
  SideBarRightTab,
};
