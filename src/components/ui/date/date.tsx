import { ComponentPropsWithRef } from "react";
import {
  DateOuterWrapper,
  DateWrapper,
  DesignDiv,
  Label,
  NativeDate,
  Calender
} from "./styled";

import dateIcon from "../../../assets/date.svg";

interface DateInputProps extends ComponentPropsWithRef<"input"> {
  label: string;
  value: string;
}

const DateInput = (props: DateInputProps) => {
  return (
    <DateOuterWrapper>
      <Label>{props.label}</Label>
      <DateWrapper>
        <NativeDate
          type="date"
          {...props}
          onChange={(e) => console.log(e.target.value)}
        />
        <DesignDiv>
          {props.value ? props.value : "Select"}
          <Calender src={dateIcon} />
        </DesignDiv>
      </DateWrapper>
    </DateOuterWrapper>
  );
};

export default DateInput;
