import Button from '@components/Button';
import { ArrowRight } from '@components/Icon';
import { ChangeEvent, memo } from 'react';
import TextArea from '@components/TextArea';
import { Logo, Title, Box, BottomContainer } from './components';

export interface ThirdStepProps {
  onSubmit: () => void;
  bio: string;
  onChangeBio: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ThirdStep = ({ onSubmit, bio, onChangeBio }: ThirdStepProps) => {
  return (
    <Box>
      <Logo />
      <Title>
        One last step,
        <br />
        Express yourself.
      </Title>
      <TextArea
        label="About me"
        placeholder="Introduce yourself"
        value={bio}
        onChange={onChangeBio}
        height={246}
      />
      <BottomContainer>
        <div />
        <Button rightIcon={<ArrowRight />} onClick={onSubmit} disabled={!bio}>
          Start Parrots
        </Button>
      </BottomContainer>
    </Box>
  );
};

export default memo(ThirdStep);
