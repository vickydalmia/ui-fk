import { ComponentPropsWithRef } from "react";
import { ButtonFill, ButtonIcon, ButtonOutline, ButtonText } from "./styled";
interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant: "outline" | "fill";
  icon: string;
  text: string;
  margin?: string;
}
const Button = ({ variant, icon, text, margin }: ButtonProps) => {
  if (variant === "outline") {
    return (
      <ButtonOutline style={{ margin: margin ? margin : undefined }}>
        <ButtonIcon src={icon} />
        <ButtonText>{text}</ButtonText>
      </ButtonOutline>
    );
  }
  return (
    <ButtonFill style={{ margin: margin ? margin : undefined }}>
      <ButtonIcon src={icon} />
      <ButtonText>{text}</ButtonText>
    </ButtonFill>
  );
};

export default Button;
