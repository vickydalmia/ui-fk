import Accordian from "../../components/accordian/accordian";
import Form from "../../components/form/form";
import HeaderAction from "../../components/header-action/header-action";
import Header from "../../components/header/header";
import MainLogo from "../../components/main-logo/main-logo";
import SideBar from "../../components/sidebar/sidebar";
import footerIcon from "../../assets/footer.png";
import {
  AccordBody,
  AccordDesc,
  AccordTitle,
  AccordWrapper,
  BelowMainArea,
  Footer,
  FooterImg,
  MainArea,
  RightBar,
  RightSectionHeader,
  RightSectionHeading,
} from "./styled";

const Dashboard = () => {
  return (
    <>
      <Header />
      <MainArea>
        <SideBar />
        <RightBar>
          <RightSectionHeader>
            <RightSectionHeading>Org Setup</RightSectionHeading>
          </RightSectionHeader>
          <HeaderAction />
          <BelowMainArea>
            <MainLogo />
            <Form />
            <Accordian
              heading={
                <AccordWrapper>
                  <AccordTitle>Lock Setup</AccordTitle>
                  <AccordDesc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AccordDesc>
                </AccordWrapper>
              }
              width="100%"
            >
              <AccordBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </AccordBody>
            </Accordian>
            <Accordian
              heading={
                <AccordWrapper>
                  <AccordTitle>Integration Info</AccordTitle>
                  <AccordDesc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AccordDesc>
                </AccordWrapper>
              }
              width="100%"
            >
              <AccordBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </AccordBody>
            </Accordian>
            <Accordian
              heading={
                <AccordWrapper>
                  <AccordTitle>AI Info</AccordTitle>
                  <AccordDesc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AccordDesc>
                </AccordWrapper>
              }
              width="100%"
            >
              <AccordBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </AccordBody>
            </Accordian>
            <Footer>
              <FooterImg src={footerIcon} />
            </Footer>
          </BelowMainArea>
        </RightBar>
      </MainArea>
    </>
  );
};

export default Dashboard;
