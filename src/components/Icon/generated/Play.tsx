import { Component, forwardRef, memo } from 'react';
import { IconProps } from '../types';
const Play = memo(forwardRef<SVGSVGElement, IconProps>(({
  size = 32,
  color,
  ...props
}, ref) => {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" color={color} ref={ref} {...props}><path d="M6.824 30.875c.703 0 1.3-.281 2.003-.686l20.49-11.843c1.458-.861 1.967-1.423 1.967-2.355 0-.931-.51-1.493-1.968-2.337L8.827 1.793c-.703-.404-1.3-.668-2.003-.668-1.3 0-2.109.984-2.109 2.513v24.706c0 1.53.809 2.53 2.11 2.53Z" fill="currentColor" /></svg>;
}));
Play.displayName = "Play";
export default Play;