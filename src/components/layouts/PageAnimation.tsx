import { HTMLMotionProps, motion } from 'framer-motion';
import { HTMLAttributes, ReactNode } from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

interface PageAnimationProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

const PageAnimation = ({ children, ...restProps }: PageAnimationProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      {...restProps}
    >
      {children}
    </motion.div>
  );
};
export default PageAnimation;
