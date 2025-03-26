import React, { useEffect, useState } from 'react';
import AnimatedLogo from "@site/src/components/ui/animated-logo";
import {Button} from "@site/src/components/ui/button";

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
                scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <AnimatedLogo />
                    <span className="font-medium text-lg tracking-tight">Apiand</span>
                </div>

                <nav className="hidden p md:flex items-center gap-8">
                    {['Features', 'Architectures', 'Documentation', 'CLI', 'Roadmap'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex"
                    >
                        Documentation
                    </Button>

                    <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
