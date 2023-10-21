import { ComponentPropsWithRef } from "react";
import { NativeSwitch, SwitchWrapper, Thumb, Track } from "./styled";
interface CheckboxProps extends ComponentPropsWithRef<"input"> {}
const Switch = ({ checked, onChange }: CheckboxProps) => {
  return (
    <SwitchWrapper>
      <NativeSwitch type="checkbox" onChange={onChange} checked={checked} />
      <Track
        style={
          {
            "--bg-color": checked ? "#6ea1ff" : "#a5a4a4",
          } as React.CSSProperties
        }
      />
      <Thumb
        style={
          {
            "--position-left": checked ? "unset" : "0",
            "--position-right": checked ? "0" : "unset",
            "--bg-color": checked ? "#276ef1" : "#6a6666",
          } as React.CSSProperties
        }
      />
    </SwitchWrapper>
  );
};

export default Switch;
