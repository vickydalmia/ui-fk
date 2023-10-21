import React, { useState } from "react";
import Switch from "../switch/switch";
import { SwitchBoxW, SwitchText } from "./styled";

const SwitchBox = () => {
  const [isChecked, setChecked] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <SwitchBoxW
      style={
        { "--bg-color": isChecked ? "#f2f6ff" : "#F7F7F7" } as React.CSSProperties
      }
    >
      <SwitchText>ERP Module (N/Y)</SwitchText>
      <Switch checked={isChecked} onChange={onChange} />
    </SwitchBoxW>
  );
};

export default SwitchBox;
