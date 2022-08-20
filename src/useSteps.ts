import { animate, AnimationOptions, useMotionValue } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const transition: AnimationOptions<any> = {
  type: 'spring',
  bounce: 0,
};

const useSteps = (stepLength: number) => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const newX = useMemo(
    () => -index * (containerRef.current?.clientWidth || 0),
    [index]
  );

  const next = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1 === stepLength ? 0 : prevIndex + 1));
  }, [stepLength]);

  const prev = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 < 0 ? 0 : prevIndex - 1));
  }, []);

  useEffect(() => {
    const controls = animate(x, newX, transition);
    return controls.stop;
  }, [index, newX, x]);

  return { containerRef, next, prev, x, index };
};

export default useSteps;
