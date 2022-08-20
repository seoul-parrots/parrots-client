import React, { memo, ReactNode, useEffect } from 'react';
import {
  animate,
  AnimationOptions,
  motion,
  MotionValue,
  useMotionValue,
} from 'framer-motion';

const transition: AnimationOptions<any> = {
  type: 'spring',
  bounce: 0,
};

export interface StepContainerProps {
  x: MotionValue<number>;
  index: number;
  children: ReactNode;
  isEnabled: boolean;
}

const StepContainer = ({
  x,
  index,
  children,
  isEnabled,
}: StepContainerProps) => {
  const opacity = useMotionValue(isEnabled ? 1 : 0.1);

  useEffect(() => {
    const controls = animate(opacity, isEnabled ? 1 : 0.1, transition);
    return controls.stop;
  }, [isEnabled, opacity]);

  return (
    <motion.div
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
        flex: 'none',
        opacity,
        padding: '0 16px',
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default memo(StepContainer);
