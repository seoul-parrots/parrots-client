import styled from '@emotion/styled';
import { InputHTMLAttributes, memo, ReactNode } from 'react';
import { css } from '@emotion/react';

export const InputVariant = {
  md: 'medium',
  sm: 'small',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type InputVariant = typeof InputVariant[keyof typeof InputVariant];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.5);
`;

const InnerContainer = styled.label<{ variant: InputVariant }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  ${({ variant }) =>
    variant === InputVariant.md
      ? css`
          padding: 24px;
        `
      : css`
          padding: 16px 24px 16px 12px;
        `};

  background: #1b191c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

const StyledInput = styled.input<{ variant: InputVariant }>`
  ${({ variant }) =>
    variant === InputVariant.md
      ? css`
          font-size: 20px;
          line-height: 24px;
        `
      : css`
          font-size: 18px;
          line-height: 22px;
        `};
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;

  color: #ffffff;

  ::placeholder {
    opacity: 0.1;
  }
`;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  label?: ReactNode;
  labelRight?: ReactNode;
  variant?: InputVariant;
}

const Input = ({
  leftIcon,
  className,
  label,
  labelRight,
  variant = InputVariant.md,
  ...restProps
}: InputProps) => {
  return (
    <Container>
      {label && (
        <LabelContainer>
          <span>{label}</span>
          <span>{labelRight}</span>
        </LabelContainer>
      )}
      <InnerContainer className={className} variant={variant}>
        {leftIcon && (
          <span style={{ opacity: restProps.value ? 1 : 0.1 }}>{leftIcon}</span>
        )}
        <StyledInput variant={variant} {...restProps} />
      </InnerContainer>
    </Container>
  );
};

export default memo(Input);
