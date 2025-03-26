import React from 'react';
import { Code, Wand2, Layers, Terminal, Workflow, PlugZap, Database, Puzzle } from 'lucide-react';
import AnimatedText from "@site/src/components/ui/animated-text";
import {useIntersectionAnimation} from "@site/src/utils/animations";

const features = [
    {
        icon: <Layers className="h-6 w-6" />,
        title: 'Multiple Architectures',
        description: 'Support for multiple software architecture and open to contributions. Choose the architecture that fits your project needs.'
    },
    {
        icon: <Terminal className="h-6 w-6" />,
        title: 'Powerful CLI Tools',
        description: 'Quickly generate software components with simple commands.'
    },
    {
        icon: <Workflow className="h-6 w-6" />,
        title: 'Automated Workflows',
        description: 'Intelligent dependency injection and streamlined development workflows.'
    },
    {
        icon: <PlugZap className="h-6 w-6" />,
        title: 'Built-in Observability',
        description: 'Integrated logging, tracing, and monitoring for deep insights into your API behavior.'
    },
    {
        icon: <Database className="h-6 w-6" />,
        title: 'Persistence Flexibility',
        description: 'Built-in support for multiple database types with standardized access patterns.'
    },
    {
        icon: <Puzzle className="h-6 w-6" />,
        title: 'Modular Design',
        description: 'Plug-and-play components and services for maximum reusability and maintainability.'
    },
];

const FeatureCard: React.FC<{ feature: typeof features[0]; index: number }> = ({ feature, index }) => {
    const { ref, isVisible } = useIntersectionAnimation();

    return (
        <div
            ref={ref}
            className={`
        p-6 rounded-xl bg-white border border-border shadow-sm 
        transition-all duration-500 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
        </div>
    );
};

const Features: React.FC = () => {
    return (
        <section className="py-24 px-6" id="features">
            <div className="max-w-7xl mx-auto">
                <AnimatedText
                    as="h2"
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                    animation="fade-in-up"
                >
                    Features that elevate your <span className="text-gradient">API development</span>
                </AnimatedText>

                <AnimatedText
                    as="p"
                    className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
                    animation="fade-in-up"
                    delay={100}
                >
                    Designed with modern developers in mind, our framework provides everything you need
                    to build sophisticated APIs with less code and more confidence.
                </AnimatedText>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;