import { Outlet } from 'react-router-dom';
import LogoTypo from '@assets/images/logo_typo.svg';
import styled from '@emotion/styled';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px 24px;
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
  return (
    <Root>
      <Header>
        <Logo src={LogoTypo} alt="Parrots" />
      </Header>
      <Contents>
        <Outlet />
      </Contents>
    </Root>
  );
};

export default BaseLayout;
