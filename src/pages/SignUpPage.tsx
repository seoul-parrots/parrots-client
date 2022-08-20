import styled from '@emotion/styled';
import { useAuth } from '@contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCallback, useLayoutEffect } from 'react';
import FirstStep from '@components/signup/FirstStep';
import useSteps from '@useSteps';
import StepContainer from '@components/StepContainer';
import SecondStep from '@components/signup/SecondStep';
import ThirdStep from '@components/signup/ThirdStep';

const Container = styled.div`
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
  const { isAuthenticating, isAuthenticated, authenticate } = useAuth();
  const navigate = useNavigate();
  const { x, next, prev, containerRef, index } = useSteps(3);

  useLayoutEffect(() => {
    // authenticate().catch((error) => {
    //   alert(error);
    //   navigate('/');
    // });
  }, [authenticate, navigate]);

  // if (isAuthenticating) {
  //   return <>Loading...</>;
  // }
  //
  // if (!isAuthenticated) {
  //   return <Navigate to="/" />;
  // }

  const handleSubmit = useCallback(() => {
    navigate('/feed');
  }, [navigate]);

  return (
    <Container>
      <StepListContainer ref={containerRef}>
        <StepContainer x={x} index={0} isEnabled={index === 0}>
          <FirstStep onSubmit={next} />
        </StepContainer>
        <StepContainer x={x} index={1} isEnabled={index === 1}>
          <SecondStep onSubmit={next} />
        </StepContainer>
        <StepContainer x={x} index={2} isEnabled={index === 2}>
          <ThirdStep onSubmit={handleSubmit} />
        </StepContainer>
      </StepListContainer>
    </Container>
  );
};

export default SignUpPage;
