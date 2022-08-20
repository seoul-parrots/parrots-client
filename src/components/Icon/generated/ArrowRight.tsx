import { Component, forwardRef, memo } from 'react';
import { IconProps } from '../types';
const ArrowRight = memo(forwardRef<SVGSVGElement, IconProps>(({
  size = 32,
  color,
  style,
  ...props
}, ref) => {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} color={color} ref={ref} {...props}><path d="M30 16.5c0-.38-.15-.728-.452-1.017L19.55 5.455C19.219 5.121 18.903 5 18.54 5c-.74 0-1.312.546-1.312 1.305 0 .364.12.713.362.956l3.377 3.459 5.067 4.657-3.634-.227H3.327C2.543 15.15 2 15.71 2 16.5s.543 1.35 1.327 1.35H22.4l3.648-.227-5.08 4.657-3.378 3.46c-.242.227-.362.591-.362.955 0 .759.573 1.305 1.312 1.305.361 0 .678-.137.98-.425l10.027-10.058c.301-.289.452-.638.452-1.017Z" fill="currentColor" /></svg>;
}));
ArrowRight.displayName = "ArrowRight";
export default ArrowRight;