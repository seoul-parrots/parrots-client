import Button from '@components/Button';
import { ArrowRight } from '@components/Icon';
import { memo } from 'react';
import Input from '@components/Input';
import styled from '@emotion/styled';
import Spacer from '@components/Spacer';
import useInputProps from '@hooks/useInputProps';
import { Logo, Title, Box, BottomContainer } from './components';

const Highlight = styled.span`
  color: #fff;
`;

const IC = styled.span`
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  opacity: 0.5;
`;

export interface SecondStepProps {
  onSubmit: () => void;
}

const SecondStep = ({ onSubmit }: SecondStepProps) => {
  // const { address } = useAuthenticatedAuth();
  const { value: username, onChange: onChangeUsername } = useInputProps('');
  const { value: displayName, onChange: onChangeDisplayName } =
    useInputProps('');

  const isDisabled = !username || !displayName;

  return (
    <Box>
      <Logo />
      <Title>How should we call you?</Title>
      <Input
        label="Username"
        labelRight={
          <>
            Other people will mention you like{' '}
            <Highlight>@beomjun.gil</Highlight>
          </>
        }
        leftIcon={<IC>@</IC>}
        placeholder="john.doe"
        value={username}
        onChange={onChangeUsername}
      />
      <Spacer height={46} />
      <Input
        label="Display name"
        placeholder="John Doe"
        value={displayName}
        onChange={onChangeDisplayName}
      />
      <BottomContainer>
        <div />
        <Button
          rightIcon={<ArrowRight />}
          onClick={onSubmit}
          disabled={isDisabled}
        >
          Submit
        </Button>
      </BottomContainer>
    </Box>
  );
};

export default memo(SecondStep);
