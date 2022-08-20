import Button from '@components/Button';
import { ArrowRight } from '@components/Icon';
import { memo } from 'react';
import useInputProps from '@hooks/useInputProps';
import TextArea from '@components/TextArea';
import { Logo, Title, Box, BottomContainer } from './components';

export interface ThirdStepProps {
  onSubmit: () => void;
}

const ThirdStep = ({ onSubmit }: ThirdStepProps) => {
  const { value, onChange } = useInputProps('');

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
        value={value}
        onChange={onChange}
        height={246}
      />
      <BottomContainer>
        <div />
        <Button rightIcon={<ArrowRight />} onClick={onSubmit} disabled={!value}>
          Start Parrots
        </Button>
      </BottomContainer>
    </Box>
  );
};

export default memo(ThirdStep);
