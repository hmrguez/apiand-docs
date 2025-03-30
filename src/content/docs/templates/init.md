---
title: init
---

The `init` command initializes a `standalone` Apiand configuration in an existing project, allowing you to use Apiand CLI commands
without creating a new project from scratch.

## Usage

```bash
apiand init [options]
```

## Options

| Option     | Alias | Description                                      | Required | Example          |
|------------|-------|--------------------------------------------------|----------|------------------|
| `--output` | `-o`  | Path where the configuration will be created     | No       | `--output ./app` |
| `--name`   | `-n`  | Name to use for the project in the configuration | No       | `--name MyApp`   |

:::note
If --output is omitted it will take current directory as working directory and if --name is omitted it will take the current folder's name as project name 
:::

## Example Usage

Initialize in current directory using folder name:

```bash
apiand init
```

Initialize with custom name:

```bash
apiand init --name CustomProject
```

Initialize in specific directory:

```bash
apiand init --output ./my-existing-app --name MyExistingApp
```

## Benefits

- Use Apiand's [generate](../../generate/generate) commands in existing projects
- Maintain consistent workflows across different project types
- Avoid starting from scratch to use Apiand's features