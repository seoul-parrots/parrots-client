import styled from '@emotion/styled';
import { gradientBackground } from '@styles';

const Tag = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 8px 12px;

  background: #1b191c;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  border-radius: 20px;

  font-size: 14px;
  line-height: 17px;

  ${({ isSelected }) => isSelected && gradientBackground};
`;

export default Tag;
