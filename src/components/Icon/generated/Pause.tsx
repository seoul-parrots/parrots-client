import { Component, forwardRef, memo } from 'react';
import { IconProps } from '../types';
const Pause = memo(forwardRef<SVGSVGElement, IconProps>(({
  size = 32,
  color,
  ...props
}, ref) => {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" color={color} ref={ref} {...props}><path d="M7.506 30.18h4.028c1.537 0 2.35-.813 2.35-2.368V3.748c0-1.608-.813-2.35-2.35-2.35H7.506c-1.537 0-2.35.813-2.35 2.35v24.064c0 1.555.813 2.368 2.35 2.368Zm12.845 0h4.01c1.555 0 2.35-.813 2.35-2.368V3.748c0-1.608-.795-2.35-2.35-2.35h-4.01c-1.555 0-2.368.813-2.368 2.35v24.064c0 1.555.813 2.368 2.368 2.368Z" fill="currentColor" /></svg>;
}));
Pause.displayName = "Pause";
export default Pause;