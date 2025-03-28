import React from 'react';
import {CheckCircle, Circle, ArrowRight, Info} from 'lucide-react';
import AnimatedText from "@site/src/components/ui/animated-text";

const Roadmap: React.FC = () => {
    const roadmapItems = [
        {
            status: 'completed',
            title: 'Core Framework',
            description: 'Solid foundation with modularity, DI container, and developer-first APIs',
        },
        {
            status: 'completed',
            title: 'CLI Tooling',
            description: 'Generate services, components and connect your architecture seamlessly',
        },
        {
            status: 'active',
            title: 'Multi-Architecture Templates',
            description: 'DDD, Hexagonal, CQRS and microservice patterns out of the box',
            timeframe: 'Current Focus'
        },
        {
            status: 'upcoming',
            title: 'Community-made Templates',
            description: 'Support for a community marketplace for templates, to let you build and publish your own projects',
            timeframe: 'Short-term'
        },
        {
            status: 'upcoming',
            title: 'VS Studio / Rider plugins',
            description: 'Add a UI wrapper for the CLI as a plugin for your IDE of preference',
            timeframe: 'Short-term'
        },
        {
            status: 'upcoming',
            title: 'Cloud-Native Integration',
            description: 'Seamless deployment to major cloud providers with zero configuration',
            timeframe: 'Medium-term'
        },
        {
            status: 'upcoming',
            title: 'Enterprise Features',
            description: 'Advanced logging, tracing, metrics and documentation generation',
            timeframe: 'Long-term'
        },
    ];

    return (
        <section id="roadmap" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <AnimatedText
                    as="h2"
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    animation="fade-in-up"
                >
                    Product <span className="text-gradient">Roadmap</span>
                </AnimatedText>

                <AnimatedText
                    as="div"
                    className="mb-10 p-4 rounded-lg bg-blue-50 border border-blue-100 flex items-start gap-3 max-w-3xl mx-auto"
                    animation="fade-in"
                    delay={100}
                >
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5"/>
                    <p className="text-sm text-muted-foreground">
                        This roadmap reflects our current development priorities and planned features.
                        The sequence and scope of upcoming features may change based on community feedback and evolving
                        requirements.
                    </p>
                </AnimatedText>

                <div className="relative mt-16">
                    {/* Timeline line */}
                    <div
                        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-blue-500/30 -translate-x-1/2"/>

                    <div className="space-y-12 relative">
                        {roadmapItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center md:odd:flex-row-reverse gap-8 md:gap-0`}
                            >
                                <AnimatedText
                                    as="div"
                                    className="w-full md:w-1/2 text-right md:pr-10 md:odd:text-left md:odd:pl-10 md:odd:pr-0"
                                    animation={index % 2 === 0 ? "fade-in-up" : "slide-in-right"}
                                    delay={index * 100}
                                >
                                    <div className={`p-6 rounded-lg ${
                                        item.status === 'completed' ? 'bg-blue-50 border border-blue-100' :
                                            item.status === 'active' ? 'bg-indigo-50 border border-indigo-100' :
                                                'bg-gray-50 border border-gray-100'
                                    }`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            {item.timeframe && (
                                                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                                                    item.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                        item.status === 'active' ? 'bg-indigo-100 text-indigo-700' :
                                                            'bg-gray-100 text-gray-700'
                                                }`}>
                                                                {item.timeframe}
                                                            </span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </AnimatedText>

                                <div className="flex items-center justify-center relative">
                                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                                        {item.status === 'completed' ? (
                                            <div
                                                className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border-4 border-white">
                                                <CheckCircle className="h-6 w-6 text-green-600"/>
                                            </div>
                                        ) : item.status === 'active' ? (
                                            <div
                                                className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center border-4 border-white animate-pulse">
                                                <ArrowRight className="h-6 w-6 text-indigo-600"/>
                                            </div>
                                        ) : (
                                            <div
                                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white">
                                                <Circle className="h-6 w-6 text-gray-400"/>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="md:w-1/2"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;