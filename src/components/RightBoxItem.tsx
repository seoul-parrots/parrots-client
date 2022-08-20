import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Title = styled.span`
  font-size: 14px;
  line-height: 17px;
`;

const InnerContainer = styled.div`
  display: flex;
  gap: 4px 2px;
  flex-wrap: wrap;
`;

export interface RightBoxItemProps {
  title: string;
  children: ReactNode;
}

const RightBoxItem = ({ title, children }: RightBoxItemProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default RightBoxItem;
