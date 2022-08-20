import { Component, forwardRef, memo } from 'react';
import { IconProps } from '../types';
const File = memo(forwardRef<SVGSVGElement, IconProps>(({
  size = 32,
  color,
  ...props
}, ref) => {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" color={color} ref={ref} {...props}><path d="M8.531 31.875h15.79c3.077 0 4.608-1.561 4.608-4.653v-13.5c0-1.917-.223-2.75-1.412-3.97l-8.192-8.34C18.195.252 17.258 0 15.593 0H8.531C5.47 0 3.923 1.576 3.923 4.668v22.554c0 3.107 1.53 4.653 4.608 4.653Zm.104-2.394c-1.53 0-2.319-.817-2.319-2.304V4.713c0-1.472.788-2.32 2.334-2.32h6.616v8.638c0 1.874.937 2.795 2.795 2.795h8.474v13.351c0 1.487-.788 2.304-2.334 2.304H8.635Zm9.694-17.9c-.595 0-.818-.237-.818-.832V2.854l8.564 8.727h-7.746Z" fill="currentColor" /></svg>;
}));
File.displayName = "File";
export default File;