import { useMemo } from 'react';

const useFadeDirection = (direction = '', delay = 0) => {

    const variants = useMemo(() => {
        const base = {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay, duration: 3 } },
        };

        if (direction === 'right') {
            base.hidden.x = 100;
            base.visible.x = 0;
        } else if (direction === 'left') {
            base.hidden.x = -100;
            base.visible.x = 0;
        } else if (direction === 'up') {
            base.hidden.y = 100;
            base.visible.y = 0;
        } else if (direction === 'down') {
            base.hidden.y = -100;
            base.visible.y = 0;
        }

        return base;
    }, [direction, delay]);

    return variants;
}

export default useFadeDirection;
