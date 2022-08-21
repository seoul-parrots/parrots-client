import styled from '@emotion/styled';
import { useAuthenticatedAuth } from '@contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import FirstStep from '@components/signup/FirstStep';
import useSteps from '@useSteps';
import StepContainer from '@components/StepContainer';
import SecondStep from '@components/signup/SecondStep';
import ThirdStep from '@components/signup/ThirdStep';
import PageAnimation from '@components/layouts/PageAnimation';
import useInputProps from '@hooks/useInputProps';
import { css, Global } from '@emotion/react';
import toast from 'react-hot-toast';

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
  const { address, txClient, loadProfile, profile } = useAuthenticatedAuth();
  const { value: username, onChange: onChangeUsername } = useInputProps('');
  const { value: displayName, onChange: onChangeDisplayName } =
    useInputProps('');
  const { value: bio, onChange: onChangeBio } = useInputProps('');

  useEffect(() => {
    if (profile) {
      navigate('/feed');
    }
  }, [navigate, profile]);

  const handleSubmit = useCallback(
    () =>
      toast.promise(
        (async () => {
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
        })(),
        {
          loading: 'Signing up...',
          success: 'Signup complete!',
          error: 'Error',
        }
      ),
    [address, bio, displayName, loadProfile, navigate, txClient, username]
  );

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
