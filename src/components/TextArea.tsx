import styled from '@emotion/styled';
import { memo, ReactNode, TextareaHTMLAttributes } from 'react';
import { css } from '@emotion/react';

const Container = styled.div<{ height?: number }>`
  display: flex;
  flex-direction: column;
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `};
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

const InnerContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 16px;
  flex: 1;

  width: 560px;
  height: 72px;

  background: #1b191c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

const StyledTextArea = styled.textarea`
  font-size: 20px;
  line-height: 24px;
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  outline: none;

  color: #ffffff;
  resize: none;

  ::placeholder {
    opacity: 0.1;
  }
`;

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  leftIcon?: ReactNode;
  label?: ReactNode;
  labelRight?: ReactNode;
  height?: number;
}

const TextArea = ({
  leftIcon,
  className,
  label,
  labelRight,
  height,
  ...restProps
}: TextAreaProps) => {
  return (
    <Container height={height}>
      {label && (
        <LabelContainer>
          {label}
          {labelRight}
        </LabelContainer>
      )}
      <InnerContainer className={className}>
        <StyledTextArea {...restProps} />
      </InnerContainer>
    </Container>
  );
};

export default memo(TextArea);
