import { css } from '@emotion/react';

export const globalStyles = css`
  html {
    font-family: 'Inter', sans-serif;
  }
  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter var', sans-serif;
    }
  }
`;
