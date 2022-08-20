import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import type { Window as KeplrWindow } from '@keplr-wallet/types';
import App from './src/App';

const container = document.getElementById('parrots');
const root = createRoot(container as HTMLElement);
root.render(createElement(App));

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}
