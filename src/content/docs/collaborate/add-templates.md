---
title: 'How to add templates'
---

Each template needs 2 parts to work: the template itself and the config class.

All templates are stored in the src/Apiand.TemplateEngine/Templates folder. The core component for a template is the architecture type. this determines th e initial folder to which to search for each template. Check the existing architecture types for better reference.

When creating new templates you can go 2 ways: create a new architecture type from scratch or add your own templates or modules to an existing architecture type.

## Adding an new architecture type

Now what's an architecture type? It is a way to group templates with similar nature together. It contains definitions for the templates, its modules, how to build the config, etc.

```csharp
public abstract class ArchitectureType
{
    public abstract string Name { get; }
    public abstract void LoadVariants(string basePath);
    public abstract TemplateConfiguration BuildConfig(CommandOptions commandOptions);
    public abstract ValidationResult Validate(TemplateConfiguration configuration);
    public abstract Dictionary<string, string> Resolve(TemplateConfiguration configuration);
    public abstract void ExecutePostCreationCommands(string outputPath, string projectName);
}
```

The Name property is the one the engine looks for when searching for a template. It's case sensitive.

The way the templating engine works is:
1. It looks for the architecture type with the same name as the one provided in the command line.
2. It loads the variants for that architecture type, this means load all the templates available for that type.
3. It builds the config for the template from the command.
4. Validates that same config to check for errors
5. If no errors were found then it resolves the requested template. This means it will return a dictionary of all the templates it will need to create. This is because some templates might need to create more than one file (for example a DDD template which requires modules or variants for Presentation, Domain, Application and Infrastructure). The key is the name folder when it will be created and the second one is the path to the template folder in the engine
6. Finally, it adds all the projects to a common solution file and executes any post-creation commands that the template might need to run, commonly you'll add all `dotnet add reference`s here.

When adding a new architecture type you have the freedom of the way it loads and resolves all the templates, however, it is recommended to follow the same pattern as the existing ones.

You'll need to also create a new command for the CLI to use this new architecture type. Follow the implementation of the existing DDD one (src/Apiand.Cli/Commands/New/NewDddCommand.cs) for reference. Then add the command to the register subcommands in the base NewCommand class

```csharp
private void RegisterSubcommands()
{
    AddCommand(new NewDddCommand());
    ...
    // Add your new command here
}
```

## Adding a new template to an existing architecture type

This is the easiest part since generally only requires to add the template folder and perhaps update the logic of the architecture type to load the new template. Generally is advised to check the existing templates to see how they are structured.

Also remember to update all from the architecture type class if needed, not just load and resolve, as the build config and validate are also important.

## Example

Let's check the existing example for the DDD architecture.

A DDD architecture is composed in 4 layers: Presentation, Domain, Application and Infrastructure.

An example of the folder structure for it is as follows:

```
src/Apiand.TemplateEngine/Templates/DDD
├── Application
│   ├── Default
├── Domain
│   ├── Default
├── Infrastructure
│   ├── MongoDB
│   ├── EFCore
├── Presentation
│   ├── REST
│   ├── GraphQL
```

It loads and resolves the templates for each layer searching for the folder matching each respective layer and the sub folder is considered an Option for that layer, for example, the DDD/Infrastructure/EFCore folder is considered an option for the Infrastructure layer.

These options are also registered in the code in the TemplateEngine/Architectures/DDD/Options.cs

Here are both the options and the accepted options for each layer, which is used in the validation.

## Need to add new parameters

If you need to add new parameters for resolving your templates you can follow [this](collaborate/add-cli-parameters.md) guide

## Generator support

Most [`generate`](../generate/generate.mdx) commands require specific behavior from the architecture type so you'll most likely need to check out [this](add-generators) guide on how to create your own generators for your new or modified template  

## Conclusion

Adding a new template is a simple process, just follow the existing patterns and you should be good to go. If you have any questions feel free to ask in the issues section.

