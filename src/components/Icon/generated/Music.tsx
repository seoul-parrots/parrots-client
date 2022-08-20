import { Component, forwardRef, memo } from 'react';
import { IconProps } from '../types';
const Music = memo(forwardRef<SVGSVGElement, IconProps>(({
  size = 32,
  color,
  ...props
}, ref) => {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" color={color} ref={ref} {...props}><path d="M25.94 7.244v-5.99c0-.844-.685-1.386-1.498-1.226l-8.188 1.784c-1.02.223-1.577.78-1.577 1.673l.032 17.714c.08.78-.287 1.29-.988 1.434l-2.533.526c-3.186.669-4.683 2.294-4.683 4.7 0 2.436 1.88 4.141 4.524 4.141 2.342 0 5.846-1.72 5.846-6.356V11.068c0-.845.16-1.02.909-1.18l7.28-1.592c.541-.112.876-.526.876-1.052Z" fill="currentColor" /></svg>;
}));
Music.displayName = "Music";
export default Music;