import { Component, forwardRef, memo } from 'react';
import { IconProps } from '../types';
const RadioOn = memo(forwardRef<SVGSVGElement, IconProps>(({
  size = 32,
  color,
  ...props
}, ref) => {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" color={color} ref={ref} {...props}><circle cx={8} cy={8} r={8} fill="#fff" /><circle cx={8} cy={8} r={6} fill="#85B3F1" /></svg>;
}));
RadioOn.displayName = "RadioOn";
export default RadioOn;