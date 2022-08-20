import styled from '@emotion/styled';
import { focusTextStyles } from '@styles';

const RoundButton = styled.button`
  display: flex;
  align-items: center;
  padding: 11px 23px;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.25);
  border-radius: 63px;

  outline: none;
  color: #000000;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  ${focusTextStyles};
  cursor: pointer;
`;

export default RoundButton;
