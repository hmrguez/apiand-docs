import React from 'react';
import {Layers, Terminal, Workflow, PlugZap, Database, Puzzle, Code} from 'lucide-react';
import {useIntersectionAnimation} from "../utils/animations.tsx";
import AnimatedText from "./ui/animated-text.tsx";
import { Card, CardGrid } from '@astrojs/starlight/components';

const features = [
    {
        icon: "layers",
        title: 'Multiple Architectures',
        description: 'Support for multiple software architecture and open to contributions. Choose the architecture that fits your project needs.'
    },
    {
        icon: "terminal",
        title: 'Powerful CLI Tools',
        description: 'Quickly generate software components with simple commands.'
    },
    {
        icon: "workflow",
        title: 'Automated Workflows',
        description: 'Intelligent dependency injection and streamlined development workflows.'
    },
    {
        icon: "code",
        title: 'Built on .NET',
        description: 'Leverages the full power of the .NET ecosystem. Use the tools, libraries and frameworks you already know and love.'
    },
    {
        icon: "plug",
        title: 'Built-in Observability',
        description: 'Integrated logging, tracing, and monitoring for deep insights into your API behavior.'
    },
    {
        icon: "database",
        title: 'Persistence Flexibility',
        description: 'Built-in support for multiple database types with standardized access patterns.'
    },
    {
        icon: "puzzle",
        title: 'Modular Design',
        description: 'Plug-and-play components and services for maximum reusability and maintainability.'
    },
];

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

                <CardGrid>
                    {features.map((feature) => (
                        <Card key={feature.title} title={feature.title} icon={feature.icon}>
                            {feature.description}
                        </Card>
                    ))}
                </CardGrid>
            </div>
        </section>
    );
};

export default Features;
