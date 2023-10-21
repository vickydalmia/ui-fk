import styled from "styled-components";

const SwitchBoxW = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-color);
  height: 44px;
  border-radius: 4px;
  padding: 12px 16px;
  width: 100%;
  margin-top: 20px;
`;

const SwitchText = styled.h3`
  font-size: 16px;
  line-height: ${20 / 16};
  color: #3c4043;
`;

export { SwitchBoxW, SwitchText };
