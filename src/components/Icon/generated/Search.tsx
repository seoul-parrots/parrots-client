import { Component, forwardRef, memo } from 'react';
import { IconProps } from '../types';
const Search = memo(forwardRef<SVGSVGElement, IconProps>(({
  size = 32,
  color,
  ...props
}, ref) => {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" color={color} ref={ref} {...props}><path d="M1.958 13.29c0 6.325 5.145 11.47 11.47 11.47 2.5 0 4.785-.805 6.668-2.156l7.072 7.086c.33.33.761.489 1.221.489.978 0 1.653-.733 1.653-1.696 0-.46-.172-.877-.474-1.179l-7.028-7.071a11.336 11.336 0 0 0 2.357-6.942c0-6.324-5.146-11.47-11.47-11.47-6.324 0-11.469 5.146-11.469 11.47Zm2.458 0c0-4.972 4.038-9.01 9.011-9.01 4.973 0 9.012 4.038 9.012 9.01 0 4.974-4.039 9.012-9.012 9.012-4.973 0-9.011-4.038-9.011-9.011Z" fill="currentColor" /></svg>;
}));
Search.displayName = "Search";
export default Search;