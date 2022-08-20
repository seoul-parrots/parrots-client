import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { enableMapSet } from 'immer';
import App from './src/App';

enableMapSet();

const container = document.getElementById('parrots');
const root = createRoot(container as HTMLElement);
root.render(createElement(App));
