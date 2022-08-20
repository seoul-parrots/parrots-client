import styled from '@emotion/styled';
import { InputHTMLAttributes, memo, ReactNode } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const InnerContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 16px;

  width: 560px;
  height: 72px;

  background: #1b191c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

const StyledInput = styled.input`
  font-size: 20px;
  line-height: 24px;
  flex: 1;
  background: none;
  border: none;
  outline: none;

  color: #ffffff;

  ::placeholder {
    opacity: 0.1;
  }
`;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  label?: ReactNode;
  labelRight?: ReactNode;
}

const Input = ({
  leftIcon,
  className,
  label,
  labelRight,
  ...restProps
}: InputProps) => {
  return (
    <Container>
      {label && (
        <LabelContainer>
          <span>{label}</span>
          {labelRight}
        </LabelContainer>
      )}
      <InnerContainer className={className}>
        {leftIcon}
        <StyledInput {...restProps} />
      </InnerContainer>
    </Container>
  );
};

export default memo(Input);
