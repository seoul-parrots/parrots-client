import { Component, forwardRef, memo } from 'react';
import { IconProps } from '../types';
const RadioOff = memo(forwardRef<SVGSVGElement, IconProps>(({
  size = 32,
  color,
  ...props
}, ref) => {
  return <svg width={size} height={size} viewBox="0 0 17 16" fill="none" color={color} ref={ref} {...props}><circle cx={8.333} cy={8} r={7.5} stroke="#fff" strokeOpacity={0.5} /></svg>;
}));
RadioOff.displayName = "RadioOff";
export default RadioOff;