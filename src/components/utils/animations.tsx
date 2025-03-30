import { useEffect, useState } from 'react';

// Staggered animation for multiple elements
export const useStaggeredAnimation = (itemCount: number, delayBetween: number = 100) => {
    return Array.from({ length: itemCount }).map((_, i) => ({
        style: {
            animationDelay: `${i * delayBetween}ms`,
            opacity: 0,
        },
    }));
};

// Type animation hook
export const useTypeAnimation = (text: string, speed: number = 50) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return displayText;
};

// Intersection observer animation hook
export const useIntersectionAnimation = () => {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(ref);

        return () => {
            if (ref) observer.unobserve(ref);
        };
    }, [ref]);

    return { ref: setRef, isVisible };
};