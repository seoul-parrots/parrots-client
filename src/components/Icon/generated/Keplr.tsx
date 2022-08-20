import { Component, forwardRef, memo } from 'react';
import { IconProps } from '../types';
const Keplr = memo(forwardRef<SVGSVGElement, IconProps>(({
  size = 32,
  color,
  style,
  ...props
}, ref) => {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} color={color} ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M30.877 13.188v5.624c0 2.561-.001 4.403-.138 5.84-.135 1.421-.394 2.33-.84 3.057a6.636 6.636 0 0 1-2.19 2.19c-.727.446-1.636.705-3.056.84-1.438.137-3.28.138-5.84.138h-5.625c-2.561 0-4.403-.001-5.84-.138-1.421-.135-2.33-.394-3.057-.84a6.636 6.636 0 0 1-2.19-2.19c-.446-.727-.705-1.636-.84-3.056-.137-1.438-.138-3.28-.138-5.84v-5.625c0-2.561.001-4.403.138-5.84.135-1.421.394-2.33.84-3.057A6.635 6.635 0 0 1 4.29 2.1c.727-.446 1.636-.705 3.056-.84 1.438-.137 3.28-.138 5.84-.138h5.625c2.561 0 4.403.001 5.84.138 1.421.135 2.33.394 3.057.84a6.636 6.636 0 0 1 2.19 2.19c.446.727.705 1.636.84 3.056.137 1.438.138 3.28.138 5.84ZM18.812 0c5.079 0 7.618 0 9.484 1.143a7.758 7.758 0 0 1 2.56 2.561C32 5.57 32 8.11 32 13.188v5.624c0 5.079 0 7.618-1.143 9.484a7.756 7.756 0 0 1-2.561 2.56C26.43 32 23.89 32 18.812 32h-5.624c-5.079 0-7.618 0-9.484-1.143a7.756 7.756 0 0 1-2.56-2.561C0 26.43 0 23.89 0 18.812v-5.624C0 8.109 0 5.57 1.143 3.704a7.757 7.757 0 0 1 2.561-2.56C5.57 0 8.11 0 13.188 0h5.624ZM13.02 16.955v7.402H9.885V7.643h3.135v7.068l6.316-7.068h3.894v.096l-7.385 7.998 8.002 8.429v.19h-3.87l-6.957-7.4Z" fill="currentColor" /></svg>;
}));
Keplr.displayName = "Keplr";
export default Keplr;