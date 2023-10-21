import {
  AccordianBody,
  AccordianButton,
  AccordianButtonIcon,
  AccordianHeader,
  AccordianWrapper,
} from "./styled";
import downArrow from "../../assets/down-arrow.svg";
import { useState } from "react";
interface AccordianProps {
  children: React.ReactNode;
  heading: React.ReactElement;
  width?: string;
}
const Accordian = ({ children, heading, width }: AccordianProps) => {
  const [showBody, setShowBody] = useState(false);
  return (
    <AccordianWrapper style={{ width: width ? width : undefined }}>
      <AccordianHeader>
        {heading}
        <AccordianButton onClick={() => setShowBody((prev) => !prev)}>
          <AccordianButtonIcon src={downArrow} showBody={showBody} />
        </AccordianButton>
      </AccordianHeader>
      {showBody ? <AccordianBody>{children}</AccordianBody> : null}
    </AccordianWrapper>
  );
};

export default Accordian;
