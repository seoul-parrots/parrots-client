import { Link, Outlet } from 'react-router-dom';
import LogoTypo from '@assets/images/logo_typo.svg';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useAuth } from '@contexts/AuthContext';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.div<{ isSignedIn: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 24px;
  height: 52px;
  box-sizing: content-box;
  ${({ isSignedIn }) =>
    !isSignedIn &&
    css`
      position: absolute;
      top: 0;
      left: 0;
    `};
`;

const Logo = styled.img`
  height: 40px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BaseLayout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Root>
      <Header isSignedIn={isAuthenticated}>
        <Link to="/">
          <Logo src={LogoTypo} alt="Parrots" />
        </Link>
      </Header>
      <Contents>
        <Outlet />
      </Contents>
    </Root>
  );
};

export default BaseLayout;
