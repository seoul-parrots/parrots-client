function defaultTemplate({ componentName, jsx }, { tpl }) {
  const IconComponentName = componentName.slice(3);

  return tpl`
    import { Component, forwardRef, memo } from 'react';
    import { IconProps } from '../types';
    
    const ${IconComponentName} = memo(forwardRef<SVGSVGElement, IconProps>(({ size = 32, color, ...props }, ref) => {
      return ${jsx};
    }));
    
    ${IconComponentName}.displayName = '${IconComponentName}';
    
    export default ${IconComponentName};
    
  `;
}

module.exports = defaultTemplate;
