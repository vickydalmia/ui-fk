import { ComponentPropsWithRef, useState } from "react";
import {
  CheckboxUi,
  CheckboxUiIcon,
  CheckboxWrapper,
  NativeCheckbox,
} from "./styled";
import tickIcon from "../../../assets/tick.svg";

interface CheckboxProps extends ComponentPropsWithRef<"input"> {}
const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };
  return (
    <CheckboxWrapper>
      <NativeCheckbox type="checkbox" {...props} checked={checked} onChange={onChange} />
      <CheckboxUi />
      {checked && <CheckboxUiIcon src={tickIcon} />}
    </CheckboxWrapper>
  );
};

export default Checkbox;
