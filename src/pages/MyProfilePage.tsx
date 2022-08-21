import PageLayout from '@components/layouts/PageLayout';
import styled from '@emotion/styled';
import { boxStyles, gradientBackground } from '@styles';
import getAvatarUrl from '@utils/getAvatarUrl';
import RoundButton from '@components/RoundButton';
import Input from '@components/Input';
import useInputProps from '@hooks/useInputProps';
import TextArea from '@components/TextArea';
import { useCallback } from 'react';
import { useAuthenticatedAuth } from '@contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  ${boxStyles};
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 54px;
`;

const Head = styled.div`
  display: flex;
  padding-bottom: 32px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 24px;
  margin-right: auto;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const DisplayName = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
`;

const Summary = styled.div`
  display: flex;
  gap: 24px;
  opacity: 0.5;
`;

const IC = styled.span`
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  opacity: 0.5;
`;

const SaveButton = styled(RoundButton)`
  ${gradientBackground};
  margin-right: auto;
`;

const MyProfilePage = () => {
  const navigate = useNavigate();
  const { address, txClient, loadProfile, profile } = useAuthenticatedAuth();
  const { value: username, onChange: onChangeUsername } = useInputProps(
    profile?.username ?? ''
  );
  const { value: displayName, onChange: onChangeDisplayName } = useInputProps(
    profile?.display_name ?? ''
  );
  const { value: bio, onChange: onChangeBio } = useInputProps(
    profile?.description ?? ''
  );

  const handleSubmit = useCallback(async () => {
    const response = await txClient.signAndBroadcast([
      txClient.msgSetProfile({
        creator: address,
        username,
        displayName,
        description: bio,
      }),
    ]);

    if (response.code !== 0) {
      alert('Error occurred during signup. Please contact support.');
      return;
    }

    await loadProfile();

    navigate('/feed');
  }, [address, bio, displayName, loadProfile, navigate, txClient, username]);

  if (!profile) {
    return null;
  }

  return (
    <PageLayout title="Profile" isWide>
      <Container>
        <Head>
          <Avatar src={getAvatarUrl(address)} />
          <InfoContainer>
            <DisplayName>{profile.display_name}</DisplayName>
            <Summary>
              <span>@{profile.username}</span>
              <span>{profile.respectedBeaks?.length} Respects</span>
            </Summary>
          </InfoContainer>
        </Head>
        <Input
          label="Username"
          leftIcon={<IC>@</IC>}
          placeholder="john.doe"
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          label="Display name"
          placeholder="John Doe"
          value={displayName}
          onChange={onChangeDisplayName}
        />
        <TextArea
          label="About me"
          placeholder="Introduce yourself"
          value={bio}
          onChange={onChangeBio}
          height={246}
        />
        <SaveButton onClick={handleSubmit}>Save</SaveButton>
      </Container>
    </PageLayout>
  );
};

export default MyProfilePage;
