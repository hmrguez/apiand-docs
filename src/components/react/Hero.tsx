import React from 'react';
import AnimatedText from "./ui/animated-text.tsx";

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-100/30 blur-3xl opacity-70" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-200/20 blur-3xl opacity-50" />
            </div>

            <div className="max-w-5xl mx-auto text-center">
                <div className="inline-block mb-4 rounded-full px-3 py-1 bg-blue-50 border border-blue-100">
                    <span className="text-sm font-medium text-blue-700">Developer Experience First</span>
                </div>

                <AnimatedText
                    as="h1"
                    className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
                    animation="fade-in-up"
                >
                    Introducing <span className="text-gradient">Apiand</span>: The Agile ASP.NET Framework
                </AnimatedText>

                <AnimatedText
                    as="p"
                    className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
                    animation="fade-in-up"
                    delay={200}
                >
                    Accelerate your development with Apiand, a framework built on top of ASP.NET.
                    Enjoy rapid and agile development through project templating with diverse architectures and interchangeable modules.
                    Utilize our CLI tool to quickly add components like services, endpoints, commands, queries, and more.
                </AnimatedText>

                <AnimatedText
                    animation="fade-in-up"
                    delay={600}
                    as="div"
                    className="relative code-window max-w-3xl mx-auto"
                >
                    <div className="code-window-header">
                        <div className="code-window-dots">
                            <div className="code-window-dot bg-red-500"></div>
                            <div className="code-window-dot bg-yellow-500"></div>
                            <div className="code-window-dot bg-green-500"></div>
                        </div>
                        <div className="text-xs text-gray-400">Terminal</div>
                    </div>
                    <div className="code-window-body font-mono text-sm overflow-hidden whitespace-nowrap">
                        <div className="inline text-green-400">$ </div>
                        <div className="inline text-blue-400">apiand</div>
                        <div className="inline text-white"> new ddd --output ./MyAmazingProject --apiType Fast-Endpoints </div>
                        <div className="h-2"></div>
                        <div className="text-gray-400 mt-1">✓ Validating configuration...</div>
                        <div className="text-gray-400 mt-1">✓ Generating architecture...</div>
                        <div className="text-gray-400 mt-1">✓ Creating project links...</div>
                        <div className="text-white mt-2">✨ Project created successfully! Ready to build amazing APIs.</div>
                    </div>
                </AnimatedText>
            </div>
        </section>
    );
};

export default Hero;