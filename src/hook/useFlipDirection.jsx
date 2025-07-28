// src/hooks/useFlipDirection.js
import { useMemo } from 'react';

const useFlipDirection = (direction = '', delay = 0) => {
  const variants = useMemo(() => {
    const base = {
      hidden: {
        rotateY: 0,
        opacity: 0,
      },
      visible: {
        rotateY: 0,
        opacity: 1,
        transition: { delay, duration: 3 },
      },
    };

    switch (direction) {
      case 'left':
        base.hidden.rotateY = 90;
        break;
      case 'right':
        base.hidden.rotateY = -90;
        break;
      case 'up':
        base.hidden.rotateX = 90;
        break;
      case 'down':
        base.hidden.rotateX = -90;
        break;
      default:
        break;
    }

    return base;
  }, [direction, delay]);

  return variants;
};

export default useFlipDirection;
