import React from 'react';
import AnimatedLogo from "@site/src/components/ui/animated-logo";

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-border py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <AnimatedLogo />
                            <span className="font-medium text-lg tracking-tight">Apiand</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            A powerful framework for modern API development with AI capabilities
                            and exceptional developer experience.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {['Documentation', 'Getting Started', 'API Reference', 'Examples'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-semibold mb-4">Community</h3>
                        <ul className="space-y-3">
                            {['GitHub', 'Discord', 'Twitter', 'Stack Overflow'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {['Terms', 'Privacy', 'Licenses', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Apiand. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        {['Twitter', 'GitHub', 'LinkedIn'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;