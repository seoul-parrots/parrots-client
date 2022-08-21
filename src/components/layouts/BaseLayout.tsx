import { Link, Outlet, useNavigate } from 'react-router-dom';
import LogoTypo from '@assets/images/logo_typo.svg';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useAuth } from '@contexts/AuthContext';
import RoundButton from '@components/RoundButton';
import { focusTextStyles, gradientBackground } from '@styles';
import getAvatarUrl from '@utils/getAvatarUrl';

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

const RightContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const UploadButton = styled(RoundButton)`
  ${gradientBackground};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 16px;
  gap: 8px;
  background: #282528;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  border-radius: 26px;
  ${focusTextStyles};
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
`;

const BaseLayout = () => {
  const { isAuthenticated, address, profile } = useAuth();
  return (
    <Root>
      <Header isSignedIn={isAuthenticated}>
        <Link to="/feed">
          <Logo src={LogoTypo} alt="Parrots" />
        </Link>
        {isAuthenticated && (
          <RightContainer>
            <Link to="/upload">
              <UploadButton>Upload</UploadButton>
            </Link>
            <Link to="/my/profile">
              <Profile>
                <span>@{profile.username}</span>
                <Avatar src={getAvatarUrl(address)} />
              </Profile>
            </Link>
          </RightContainer>
        )}
      </Header>
      <Contents>
        <Outlet />
      </Contents>
    </Root>
  );
};

export default BaseLayout;
