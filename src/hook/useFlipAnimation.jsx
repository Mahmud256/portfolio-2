// src/hooks/useFlipAnimation.js
const useFlipAnimation = (isEven = false) => {
  return {
    hidden: {
      opacity: 0,
      rotateY: isEven ? 90 : -90,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
};

export default useFlipAnimation;
