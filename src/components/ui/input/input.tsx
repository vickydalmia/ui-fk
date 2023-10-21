import { ComponentPropsWithRef } from "react";
import { InputBase, InputWrapper, Label } from "./styled";

interface TextInputProps extends ComponentPropsWithRef<"input"> {
  label: string;
}

const TextInput = (props: TextInputProps) => {
  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      <InputBase {...props} />
    </InputWrapper>
  );
};

export default TextInput;
