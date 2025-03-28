---
sidebar_label: 'How to add generators'
---

# Creating Generators 

This guide explains how to contribute to Apiand by creating new generators (implementations of the [`generate`](../components/generate) command. These generators enable developers to add components to their projects using the CLI.

## Types of Generator Contributions

You can contribute generators in two ways:

1. **Adding a generator to an existing architecture**: Implement an existing `IGenerate<Component>` interface
2. **Creating a completely new generator**: Define a new interface, implement it, and register it with the CLI

## Adding a Generator to an Existing Architecture

This is the simpler approach when you want to support an existing component type for a different architecture.

### Step 1: Create the Implementation Class

1. Navigate to `src/Apiand.TemplateEngine/Architectures/<YourArchitecture>/Commands/`
2. Create a new class implementing an existing interface (e.g., `IGenerateEntity`)
3. Set the `ArchName` property to your architecture's name

```csharp
using Apiand.TemplateEngine.Models;
using Apiand.TemplateEngine.Models.Commands;

namespace Apiand.TemplateEngine.Architectures.YourArchitecture.Commands;

public class GenerateEntity : IGenerateEntity
{
    public string ArchName { get; set; } = YourArchUtils.Name;

    public void Handle(string workingDirectory, string projectDirectory, string argument,
        Dictionary<string, string> extraData,
        TemplateConfiguration configuration, IMessenger messenger)
    {
        // Implementation logic goes here
        string entityName = argument;
        
        // Find relevant projects in your architecture
        // Create directories as needed
        // Generate files using templates
        // Report progress using the messenger
    }
}
```

### Step 2: Test Your Generator

Test your generator by running:

```bash
dotnet apiand generate entity YourEntityName --path /path/to/project
```

## Creating a New Generator Type

Follow these steps to add a completely new generator type:

### Step 1: Define the Interface

Create a new interface in `src/Apiand.TemplateEngine/Models/Commands/`:

```csharp
namespace Apiand.TemplateEngine.Models.Commands;

public interface IGenerateYourComponent : ICommandSpecification;
```

### Step 2: Implement the Interface

Create an implementation in your architecture's directory:

```csharp
using Apiand.TemplateEngine.Models;
using Apiand.TemplateEngine.Models.Commands;

namespace Apiand.TemplateEngine.Architectures.YourArchitecture.Commands;

public class GenerateYourComponent : IGenerateYourComponent
{
    public string ArchName { get; set; } = YourArchUtils.Name;

    public void Handle(string workingDirectory, string projectDirectory, string argument,
        Dictionary<string, string> extraData,
        TemplateConfiguration configuration, IMessenger messenger)
    {
        // Your component generation logic here
    }
}
```

### Step 3: Register the Generator with the CLI

Modify the `GenerateCommand` constructor in `src/Apiand.Cli/Commands/GenerateCommand.cs`:

```csharp
public GenerateCommand() : base("generate", "Add components to an existing project")
{
    _processor = new TemplateProcessor();
    _messenger = new ConsoleMessenger();

    RegisterComponentGenerator("service", "Add a new service to the project", typeof(IGenerateService));
    RegisterComponentGenerator("endpoint", "Add a new endpoint to the project", typeof(IGenerateEndpoint));
    RegisterComponentGenerator("entity", "Add a new entity to the project", typeof(IGenerateEntity));
    
    // Add your new generator
    RegisterComponentGenerator("yourcomponent", "Add a new yourcomponent to the project", typeof(IGenerateYourComponent));
}
```

### Step 4: Add Special Options (if needed)

If your generator requires specific options, update the `RegisterComponentGenerator` method:

```csharp
else if (commandName == "yourcomponent")
{
    var specialOption = new Option<string>(
        "--special-option",
        "Description of your special option");
    specialOption.AddAlias("-s");
    command.AddOption(specialOption);

    command.SetHandler(
        (name, path, specialOption) =>
        {
            var data = new Dictionary<string, string> { ["special-option"] = specialOption };
            HandleGenerateComponent(name, path, commandName, implementationType, data);
        },
        nameArgument, pathOption, specialOption);
}
```

## Best Practices for Generator Implementation

1. **Follow existing patterns**: Study the existing generators for guidance
2. **Use meaningful namespaces**: Place files in the correct architecture directory
3. **Handle errors gracefully**: Provide clear error messages via the messenger
4. **Document your code**: Add comments explaining the logic of your generator
5. **Test thoroughly**: Verify that your generator works in various scenarios

## Implementation Tips

- Use `Path.Combine()` for cross-platform path handling
- Check for the existence of directories and files before writing
- Report progress using the messenger's methods
- Use relative paths in your output messages for readability
- Validate user input before processing

By following this guide, you can contribute valuable generators to the Apiand project and help expand its functionality for different architectures and component types.