import {
  IconWrapper,
  Label,
  NativeSelect,
  PresentationalBit,
  SelectWrapper,
  Wrapper,
} from "./styled";
import selectIcon from "../../../assets/select.svg";
import { ComponentPropsWithRef } from "react";

interface SelectProps extends ComponentPropsWithRef<"input"> {
  label: string;
  value: string;
  children: React.ReactNode;
}
const Select = (props: SelectProps) => {
  return (
    <SelectWrapper>
      <Label>{props.label}</Label>
      <Wrapper>
        <NativeSelect value={props.value}>{props.children}</NativeSelect>
        <PresentationalBit>
          {props.value ? props.value : "Select"}
          <IconWrapper>
            <img src={selectIcon} />
          </IconWrapper>
        </PresentationalBit>
      </Wrapper>
    </SelectWrapper>
  );
};

export default Select;
