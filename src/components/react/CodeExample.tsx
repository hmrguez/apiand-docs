import React from 'react';
import {useIntersectionAnimation} from "../utils/animations.tsx";
import AnimatedText from "./ui/animated-text.tsx";

const CodeExample: React.FC = () => {
    const {ref, isVisible} = useIntersectionAnimation();

    const codeString = `// Define a UserService with Apiand
[Service]
public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IAuthService _authService;
    private readonly ILogger<UserService> _logger;
    
    public UserService(
        IUserRepository userRepository,
        IAuthService authService,
        ILogger<UserService> logger)
    {
        _userRepository = userRepository;
        _authService = authService;
        _logger = logger;
    }
    
    public async Task<UserDto> CreateUserAsync(CreateUserDto userData)
    {
        _logger.LogInformation("Creating user with email {Email}", userData.Email);
        
        // Validate email uniqueness
        if (await _userRepository.ExistsAsync(u => u.Email == userData.Email))
        {
            throw new DomainException("User with this email already exists", "USER_EXISTS");
        }
        
        // Hash password securely
        string hashedPassword = _authService.HashPassword(userData.Password);
        
        // Create and save user entity
        var user = new User
        {
            Email = userData.Email,
            PasswordHash = hashedPassword,
            Name = userData.Name,
            Roles = new[] { Role.User }
        };
        
        await _userRepository.AddAsync(user);
        await _userRepository.SaveChangesAsync();
        
        // Generate auth token
        string token = _authService.GenerateToken(user);
        
        return UserMapper.ToDto(user, token);
    }
}`;

    return (
        <section className="py-24 px-6" id="code">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <AnimatedText
                    as="h2"
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                    animation="fade-in-up"
                >
                    Elegant and <span className="text-gradient">expressive code</span>
                </AnimatedText>

                <AnimatedText
                    as="p"
                    className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
                    animation="fade-in-up"
                    delay={100}
                >
                    Write clean, maintainable C# code that expresses your business logic clearly.
                    Focus on what matters, while we handle the boilerplate.
                </AnimatedText>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div ref={ref}
                         className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="code-window">
                            <div className="code-window-header">
                                <div className="code-window-dots">
                                    <div className="code-window-dot bg-red-500"></div>
                                    <div className="code-window-dot bg-yellow-500"></div>
                                    <div className="code-window-dot bg-green-500"></div>
                                </div>
                                <div className="text-xs text-gray-400">UserService.cs</div>
                            </div>
                            <div className="code-window-body">
                                <pre className="border-none not-content">
                                  <code>{codeString}</code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6">
                        <AnimatedText
                            as="h3"
                            className="text-2xl font-bold"
                            animation="fade-in-up"
                            delay={300}
                        >
                            Focus on business logic, not boilerplate
                        </AnimatedText>

                        <AnimatedText
                            as="p"
                            className="text-muted-foreground"
                            animation="fade-in-up"
                            delay={400}
                        >
                            Our framework handles the complex infrastructure concerns like dependency injection,
                            validation, error handling, and persistence, letting you focus on what your API needs to do.
                        </AnimatedText>

                        <ul className="space-y-4">
                            {[
                                'Automatic dependency injection wiring',
                                'Built-in logging and tracing',
                                'Standardized exception handling',
                                'Clean architecture patterns',
                            ].map((item, index) => (
                                <AnimatedText
                                    key={item}
                                    as="li"
                                    className="flex items-center"
                                    animation="fade-in-up"
                                    delay={500 + (index * 100)}
                                >
                                    <div
                                        className="w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </AnimatedText>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodeExample;
