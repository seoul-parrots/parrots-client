import PageLayout from '@components/layouts/PageLayout';
import styled from '@emotion/styled';
import { boxStyles, gradientBackground } from '@styles';
import getAvatarUrl from '@utils/getAvatarUrl';
import RoundButton from '@components/RoundButton';
import Input from '@components/Input';
import useInputProps from '@hooks/useInputProps';
import TextArea from '@components/TextArea';

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
  const { value: username, onChange: onChangeUsername } = useInputProps('');
  const { value: displayName, onChange: onChangeDisplayName } =
    useInputProps('');
  const { value: bio, onChange: onChangeBio } = useInputProps('');
  return (
    <PageLayout title="Profile" isWide>
      <Container>
        <Head>
          <Avatar src={getAvatarUrl('asdasd')} />
          <InfoContainer>
            <DisplayName>asdasd</DisplayName>
            <Summary>
              <span>@daaa</span>
              <span>12 Beaks</span>
              <span>12 Respects</span>
            </Summary>
          </InfoContainer>
          <RoundButton>Sign out</RoundButton>
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
        <SaveButton>Save</SaveButton>
      </Container>
    </PageLayout>
  );
};

export default MyProfilePage;
