import React from 'react';
import {useIntersectionAnimation} from "../../utils/animations.tsx";

type AnimatedTextProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'li';
    children: React.ReactNode;
    animation?: 'fade-in' | 'fade-in-up' | 'slide-in-right';
    delay?: number;
    className?: string;
    gradient?: boolean;
    onClick?: () => void;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
                                                       as: Component = 'p',
                                                       children,
                                                       animation = 'fade-in',
                                                       delay = 0,
                                                       className = '',
                                                       gradient = false,
                                                       onClick,
                                                   }) => {
    const {ref, isVisible} = useIntersectionAnimation();

    return (
        <Component
            ref={ref}
            className={`
        ${className}
        ${isVisible ? `animate-${animation}` : 'opacity-0'}
        ${gradient ? 'text-gradient' : ''}
      `}
            style={{animationDelay: `${delay}ms`}}
            onClick={onClick}
        >
            {children}
        </Component>
    );
};

export default AnimatedText;