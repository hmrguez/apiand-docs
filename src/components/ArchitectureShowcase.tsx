import React from 'react';
import AnimatedText from "@site/src/components/ui/animated-text";
import {useIntersectionAnimation} from "@site/src/utils/animations";

const architectures = [
    {
        name: 'Domain-Driven Design',
        description: 'Perfect for complex business domains with rich models and clearly defined boundaries',
        features: ['Entities & Value Objects', 'Aggregates & Repositories', 'Domain Events', 'Bounded Contexts'],
        color: 'blue',
        pending: false
    },
    {
        name: 'Hexagonal Architecture',
        description: 'Isolates business logic from external concerns through ports and adapters',
        features: ['Core Domain Isolation', 'Pluggable Adapters', 'Easy Testing', 'Infrastructure Independence'],
        color: 'purple',
        pending: true
    },
    {
        name: 'Ye-Old-Monolith',
        description: 'Simple straightforward one layer app for quick and easy development',
        features: ['Fast Development', 'Simple Deployment', 'Easy to Reason About', 'Reduced Complexity'],
        color: 'green',
        pending: true
    },
    {
        name: 'Microservices',
        description: 'Distributed architecture for large-scale systems with independent deployable services',
        features: ['Service Boundaries', 'Event-Based Communication', 'Independent Deployment', 'Scalability'],
        color: 'orange',
        pending: true
    },
];

const ArchitectureCard: React.FC<{ architecture: typeof architectures[0]; index: number }> = ({
                                                                                                  architecture,
                                                                                                  index
                                                                                              }) => {
    const {ref, isVisible} = useIntersectionAnimation();

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string, border: string, text: string }> = {
            blue: {bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-700'},
            purple: {bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-700'},
            green: {bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-700'},
            orange: {bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-700'}
        };

        return colors[color] || colors.blue;
    };

    const colorClasses = getColorClasses(architecture.color);

    return (
        <div
            ref={ref}
            className={`
                            architecture-card
                            transition-all duration-500 transform
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                          `}
            style={{transitionDelay: `${index * 150}ms`}}
        >
            <div className="flex items-center justify-between mb-4">
                <div
                    className={`inline-block rounded-full px-3 py-1 ${colorClasses.bg} ${colorClasses.border} ${colorClasses.text} text-sm font-medium`}>
                    {architecture.name}
                </div>

                {architecture.pending && (
                    <div
                        className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-${architecture.color}-50 border border-${architecture.color}-100 text-${architecture.color}-700 text-xs font-medium`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                            <path d="M12 13v8"></path>
                            <path d="M12 3v3"></path>
                        </svg>
                        Roadmap
                    </div>
                )}
            </div>

            <p className="text-muted-foreground mb-6">{architecture.description}</p>

            <ul className="space-y-2">
                {architecture.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                        <div
                            className={`w-5 h-5 rounded-full ${colorClasses.bg} ${colorClasses.text} flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ArchitectureShowcase: React.FC = () => {
    return (
        <section className="py-24 px-6" id="architectures">
            <div className="max-w-7xl mx-auto">
                <AnimatedText
                    as="h2"
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                    animation="fade-in-up"
                >
                    Choose your <span className="text-gradient">architectural style</span>
                </AnimatedText>

                <AnimatedText
                    as="p"
                    className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
                    animation="fade-in-up"
                    delay={100}
                >
                    One framework supporting multiple architectural patterns.
                    Select the approach that best fits your project's needs.
                </AnimatedText>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {architectures.map((architecture, index) => (
                        <ArchitectureCard
                            key={architecture.name}
                            architecture={architecture}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchitectureShowcase;