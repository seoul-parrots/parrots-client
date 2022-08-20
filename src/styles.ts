import BgGradient from '@assets/images/bg_gradient.png';
import { css } from '@emotion/react';

export const globalStyles = css`
  html {
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    background-color: #1b191c;
  }
  body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

export const focusTextStyles = css`
  font-family: 'Cabinet Grotesk', sans-serif;
`;

export const boxStyles = css`
  background-color: #282528;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

export const maskedText = css`
  background-size: 100% auto;
  background: url(${BgGradient}) no-repeat center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const gradientBackground = css`
  background-size: 100% auto;
  background: url(${BgGradient}) no-repeat center;
`;
