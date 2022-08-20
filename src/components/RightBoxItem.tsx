import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.span`
  font-size: 14px;
  line-height: 17px;
`;

const InnerContainer = styled.div<{ isVertical?: boolean }>`
  display: flex;
  gap: 4px 2px;
  flex-wrap: wrap;
  ${({ isVertical }) =>
    isVertical &&
    css`
      flex-direction: column;
      gap: 8px;
      flex-wrap: nowrap;
    `};
`;

export interface RightBoxItemProps {
  title: string;
  children: ReactNode;
  isVertical?: boolean;
}

const RightBoxItem = ({ title, children, isVertical }: RightBoxItemProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InnerContainer isVertical={isVertical}>{children}</InnerContainer>
    </Container>
  );
};

export default RightBoxItem;
