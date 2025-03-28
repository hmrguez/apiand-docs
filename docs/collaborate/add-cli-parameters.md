---
sidebar_label: 'How to add new CLI parameters'
---

# How to add new cli parameters

Typically when adding a new architecture type you will need to add new parameters to the CLI. This guide will show you how to do that.

## Command options

The CLI uses System.CommandLine. Go to the Apiand.Cli/Commands/New, this is the command used to creating templates

You'll need to add a new option to the command and then add that option to the handler of the command, for example, let's say you want to add a new parameter called `--my-new-parameter`:

```csharp
public class NewCommand : Command
{
    public NewCommand()
        : base("new", "Creates a new project from a template")
    {
        ...
        // Create the new option
        var newOption = new Option<string>("--my-new-parameter", "My New Parameter");
        newOption.AddAlias("-mnp");
        AddOption(newOption);

        // Add the new option to the handler
        this.SetHandler(HandleCommand, outputOption, ..., newOption);
        ...
    }

    private void HandleCommand(string output, ..., string? myNewParameter)
    {
        ...
    }
}
```

Then you should add the option to the CommandOptions class

```csharp
public class CommandOptions
{
    ...
    public string? MyNewParameter { get; set; }
}
```

```csharp
public class NewCommand : Command
{
    private void HandleCommand(string output, ..., string? myNewParameter)
    {
        ...
        var commandOptions = new CommandOptions()
        {
            ...
            MyNewParameter = myNewParameter
        };
        ...
    }
}
```