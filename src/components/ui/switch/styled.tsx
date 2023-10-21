import styled from "styled-components";
const SwitchWrapper = styled.div`
  position: relative;
`;
const Thumb = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: var(--bg-color);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -3px;
  left: var(--position-left);
  right: var(--position-right);
  pointer-events: none;
`;

const Track = styled.div`
  height: 14px;
  width: 40px;
  border-radius: 7px;
  background-color: var(--bg-color);
  cursor: pointer;
`;
const NativeSwitch = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

Thumb.displayName = "Thumb";
Track.displayName = "Track";
NativeSwitch.displayName = "NativeSwitch";
SwitchWrapper.displayName = "SwitchWrapper";

export { Thumb, Track, NativeSwitch, SwitchWrapper };
