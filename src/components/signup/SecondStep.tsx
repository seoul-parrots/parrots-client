import Button from '@components/Button';
import { ArrowRight } from '@components/Icon';
import { ChangeEvent, memo } from 'react';
import Input from '@components/Input';
import styled from '@emotion/styled';
import Spacer from '@components/Spacer';
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
  username: string;
  onChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  displayName: string;
  onChangeDisplayName: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SecondStep = ({
  onSubmit,
  username,
  onChangeUsername,
  displayName,
  onChangeDisplayName,
}: SecondStepProps) => {
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
            <Highlight>@parrots.seoul</Highlight>
          </>
        }
        leftIcon={<IC>@</IC>}
        placeholder="parrots.seoul"
        value={username}
        onChange={onChangeUsername}
      />
      <Spacer height={46} />
      <Input
        label="Display name"
        placeholder="Seoul Parrots"
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
