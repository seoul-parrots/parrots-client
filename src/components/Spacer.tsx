import styled from '@emotion/styled';

export interface SpacerProps {
  height?: number;
  width?: number;
}

const Spacer = styled.div<SpacerProps>`
  ${({ height }) => height && `height: ${height}px;`};
  ${({ width }) => width && `width: ${width}px;`};
`;

export default Spacer;
