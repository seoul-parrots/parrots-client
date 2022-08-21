import styled from '@emotion/styled';
import { useAuth, useAuthenticatedAuth } from '@contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCallback, useLayoutEffect } from 'react';
import FirstStep from '@components/signup/FirstStep';
import useSteps from '@useSteps';
import StepContainer from '@components/StepContainer';
import SecondStep from '@components/signup/SecondStep';
import ThirdStep from '@components/signup/ThirdStep';
import PageAnimation from '@components/layouts/PageAnimation';
import { Api } from '@generated/rest';
import useInputProps from '@hooks/useInputProps';
import { css, Global } from '@emotion/react';

const Container = styled(PageAnimation)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StepListContainer = styled.div`
  display: flex;
  width: 674px;
  height: 727px;
`;

const SignUpPage = () => {
  const navigate = useNavigate();
  const { x, next, prev, containerRef, index } = useSteps(3);
  const { address, txClient, loadProfile } = useAuthenticatedAuth();
  const { value: username, onChange: onChangeUsername } = useInputProps('');
  const { value: displayName, onChange: onChangeDisplayName } =
    useInputProps('');
  const { value: bio, onChange: onChangeBio } = useInputProps('');

  useLayoutEffect(() => {}, []);

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
  }, [address, bio, displayName, navigate, txClient, username]);

  return (
    <Container>
      <Global
        styles={css`
          html {
            overflow-x: hidden;
          }
        `}
      />
      <StepListContainer ref={containerRef}>
        <StepContainer x={x} index={0} isEnabled={index === 0}>
          <FirstStep onSubmit={next} />
        </StepContainer>
        <StepContainer x={x} index={1} isEnabled={index === 1}>
          <SecondStep
            onSubmit={next}
            username={username}
            onChangeUsername={onChangeUsername}
            displayName={displayName}
            onChangeDisplayName={onChangeDisplayName}
          />
        </StepContainer>
        <StepContainer x={x} index={2} isEnabled={index === 2}>
          <ThirdStep
            bio={bio}
            onChangeBio={onChangeBio}
            onSubmit={handleSubmit}
          />
        </StepContainer>
      </StepListContainer>
    </Container>
  );
};

export default SignUpPage;
