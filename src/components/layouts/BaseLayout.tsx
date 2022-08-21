import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import LogoTypo from '@assets/images/logo_typo.svg';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useAuth } from '@contexts/AuthContext';
import RoundButton from '@components/RoundButton';
import { focusTextStyles, gradientBackground } from '@styles';
import getAvatarUrl from '@utils/getAvatarUrl';
import { useEffect, useState } from 'react';

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
  position: relative;
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
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
`;

const ProfilePopover = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  margin-top: 10px;

  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  background: #282528;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  border-radius: 26px;
  ${focusTextStyles};
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  a:not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 8px;
  }
`;

const BaseLayout = () => {
  const { isAuthenticated, address, profile } = useAuth();
  const location = useLocation();
  const [isShowProfilePopover, setIsShowProfilePopover] = useState(false);
  useEffect(() => {
    setIsShowProfilePopover(false);
  }, [location]);

  return (
    <Root>
      <Header isSignedIn={isAuthenticated}>
        <Link to="/feed">
          <Logo src={LogoTypo} alt="Parrots" />
        </Link>
        {isAuthenticated && profile && (
          <RightContainer>
            <Link to="/upload">
              <UploadButton>Upload</UploadButton>
            </Link>
            <Profile onClick={() => setIsShowProfilePopover((prev) => !prev)}>
              <span>@{profile.username}</span>
              <Avatar src={getAvatarUrl(address)} />
              {isShowProfilePopover && (
                <ProfilePopover>
                  <Link to="/my/profile">My profile</Link>
                  <Link to="/my/beaks">My Beaks</Link>
                </ProfilePopover>
              )}
            </Profile>
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
