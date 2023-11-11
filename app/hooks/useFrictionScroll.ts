import { useRef, useEffect, RefObject } from 'react';

const useFrictionScroll = (): RefObject<HTMLDivElement> => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        let animationFrameId: number | null = null;
        let scrolling = false;
        let startY = 0;
        let scrollY = 0;

        const smoothScroll = () => {
            scrollY += (startY - scrollY) * 3;
            if (Math.abs(startY - scrollY) > 0.5) {
                container!.scrollTop = scrollY;
                animationFrameId = requestAnimationFrame(smoothScroll);
            } else {
                scrolling = false;
            }
        };

        const onScroll = (e: Event) => {
            startY = container!.scrollTop;
            if (!scrolling) {
                scrolling = true;
                animationFrameId = requestAnimationFrame(smoothScroll);
            }
        };

        container!.addEventListener('scroll', onScroll);

        return () => {
            container!.removeEventListener('scroll', onScroll);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return containerRef;
};

export default useFrictionScroll;
