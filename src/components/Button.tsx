import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import styled from '@emotion/styled';
import { focusTextStyles, gradientBackground } from '@styles';
import BgGradient from '@assets/images/bg_gradient.png';

const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 23px 11px 15px;
  gap: 24px;
  ${focusTextStyles};
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  ${gradientBackground};
  border: 1px solid rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  cursor: pointer;
  :disabled {
    cursor: inherit;
    background: linear-gradient(0deg, #1b191c, #1b191c), url(${BgGradient});
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.2);
    filter: none;
  }
`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = ({
  children,
  leftIcon,
  rightIcon,
  ...restProps
}: ButtonProps) => (
  <Container {...restProps}>
    {leftIcon}
    <span>{children}</span>
    {rightIcon}
  </Container>
);

export default memo(Button);
