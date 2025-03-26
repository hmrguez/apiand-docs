import React, { useState } from 'react';
import {useIntersectionAnimation} from "@site/src/utils/animations";
import AnimatedText from "@site/src/components/ui/animated-text";

const commandExamples = [
    {
        title: 'Create a new API project',
        command: 'apiand new my-awesome-api --architecture ddd',
        description: 'Scaffolds a new API project with Domain-Driven Design architecture'
    },
    {
        title: 'Generate a service with AI',
        command: 'apiand generate service product --ai "Create a product catalog service with categorization"',
        description: 'Uses AI to create a full-featured product service based on your description'
    },
    {
        title: 'Add a new endpoint',
        command: 'apiand generate endpoint orders/create-order --method post',
        description: 'Creates a new endpoint with validation, controller, and service integration'
    },
    {
        title: 'Generate domain entities',
        command: 'apiand generate entity customer --attributes "name:string,email:string,status:enum[active,inactive]"',
        description: 'Creates a domain entity with specified attributes and validation'
    }
];

const CommandDemo: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { ref, isVisible } = useIntersectionAnimation();

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white" id="cli">
            <div className="max-w-7xl mx-auto">
                <AnimatedText
                    as="h2"
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                    animation="fade-in-up"
                >
                    Powerful <span className="text-gradient">CLI tools</span> at your fingertips
                </AnimatedText>

                <AnimatedText
                    as="p"
                    className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
                    animation="fade-in-up"
                    delay={100}
                >
                    Speed up development with an intelligent command-line interface that generates code,
                    creates components, and scaffolds project structures.
                </AnimatedText>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 space-y-4">
                        {commandExamples.map((example, index) => (
                            <AnimatedText
                                key={example.title}
                                as="div"
                                className={`p-5 rounded-lg border transition-all duration-300 cursor-pointer ${
                                    activeIndex === index
                                        ? 'border-blue-200 bg-blue-50/50'
                                        : 'border-border hover:border-blue-100 hover:bg-blue-50/20'
                                }`}
                                animation="fade-in-up"
                                delay={index * 100 + 200}
                                onClick={() => setActiveIndex(index)}
                            >
                                <h3 className="font-medium mb-2">{example.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{example.description}</p>
                                <div className="flex items-center">
                                    <div className="command-chip mr-2">CLI</div>
                                    <span className="text-sm text-blue-600 font-mono">{example.command.split(' ')[0]}</span>
                                </div>
                            </AnimatedText>
                        ))}
                    </div>

                    <div ref={ref} className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="code-window">
                            <div className="code-window-header">
                                <div className="code-window-dots">
                                    <div className="code-window-dot bg-red-500"></div>
                                    <div className="code-window-dot bg-yellow-500"></div>
                                    <div className="code-window-dot bg-green-500"></div>
                                </div>
                                <div className="text-xs text-gray-400">terminal</div>
                            </div>
                            <div className="code-window-body font-mono text-sm">
                                <div className="text-green-400">$ </div>
                                <div className="inline text-blue-400">{commandExamples[activeIndex].command.split(' ')[0]}</div>
                                <div className="inline text-white">{' ' + commandExamples[activeIndex].command.split(' ').slice(1).join(' ')}</div>
                                <div className="h-2"></div>
                                <div className="text-gray-400 mt-1">✓ Parsing command...</div>
                                <div className="text-gray-400 mt-1">✓ Validating options...</div>
                                <div className="text-gray-400 mt-1">✓ Generating files...</div>
                                {activeIndex === 1 && (
                                    <>
                                        <div className="text-gray-400 mt-1">✓ Analyzing AI description...</div>
                                        <div className="text-gray-400 mt-1">✓ Creating domain models...</div>
                                        <div className="text-gray-400 mt-1">✓ Implementing service logic...</div>
                                    </>
                                )}
                                <div className="text-white mt-2">✨ Operation completed successfully! Files created:</div>
                                {activeIndex === 0 && (
                                    <>
                                        <div className="text-green-400 mt-1">   create my-awesome-api/src/Domain/</div>
                                        <div className="text-green-400 mt-1">   create my-awesome-api/src/Application/</div>
                                        <div className="text-green-400 mt-1">   create my-awesome-api/src/Infrastructure/</div>
                                        <div className="text-green-400 mt-1">   create my-awesome-api/src/Api/</div>
                                    </>
                                )}
                                {activeIndex === 1 && (
                                    <>
                                        <div className="text-green-400 mt-1">   create src/Domain/Product/Product.cs</div>
                                        <div className="text-green-400 mt-1">   create src/Domain/Product/IProductRepository.cs</div>
                                        <div className="text-green-400 mt-1">   create src/Application/Product/ProductService.cs</div>
                                        <div className="text-green-400 mt-1">   create src/Api/Controllers/ProductController.cs</div>
                                    </>
                                )}
                                {activeIndex === 2 && (
                                    <>
                                        <div className="text-green-400 mt-1">   create src/Api/Controllers/OrdersController.cs</div>
                                        <div className="text-green-400 mt-1">   create src/Application/Orders/Dtos/CreateOrderDto.cs</div>
                                        <div className="text-green-400 mt-1">   update src/Api/Controllers/OrdersController.cs</div>
                                    </>
                                )}
                                {activeIndex === 3 && (
                                    <>
                                        <div className="text-green-400 mt-1">   create src/Domain/Customer/Customer.cs</div>
                                        <div className="text-green-400 mt-1">   create src/Domain/Customer/ICustomerRepository.cs</div>
                                        <div className="text-green-400 mt-1">   create src/Application/Customer/CustomerMapper.cs</div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommandDemo;