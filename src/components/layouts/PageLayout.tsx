import styled from '@emotion/styled';
import { memo, ReactNode } from 'react';
import { focusTextStyles } from '@styles';
import { css } from '@emotion/react';
import PageAnimation from './PageAnimation';

const Container = styled(PageAnimation)<{ isWide?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isWide }) =>
    isWide
      ? css`
          width: 1320px;
        `
      : css`
          width: 720px;
        `}

  margin: 12px auto;
`;

const Title = styled.div`
  ${focusTextStyles};
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
`;

const Contents = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

export interface PageLayoutProps {
  title: ReactNode;
  children: ReactNode;
  isWide?: boolean;
}

const PageLayout = ({ title, children, isWide }: PageLayoutProps) => {
  return (
    <Container isWide={isWide}>
      <Title>{title}</Title>
      <Contents>{children}</Contents>
    </Container>
  );
};

export default memo(PageLayout);
