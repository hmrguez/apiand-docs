---
title: 'generate'
---

The `generate` command adds components to an existing Apiand project. It supports adding different component types with
specific options.

Must be used within the root directory of an existing Apiand project because I loads the project configuration to
determine the architecture and generate the component accordingly.

## Usage

```bash
apiand generate <component-type> <name> [options]
```

## Supported Component Types

The `generate` command supports creating different component types in your project:

| Component Type                  | Description                   |
|---------------------------------|-------------------------------|
| [`service`](generate-service)   | Generates a new service class |
| [`endpoint`](generate-endpoint) | Generates a new API endpoint  |
| [`entity`](generate-entity)     | Generates a new domain entity |

:::note

Each generate command can have different options and behaviors depending on the architecture used in the project

:::

## Options

These are all the options supported by default on all `generate` commands:

| Option   | Alias | Description                       | Required | Example                  |
|----------|-------|-----------------------------------|----------|--------------------------|
| `<name>` |       | Name of the component to generate | Yes      | `Product`                |
| `--path` | `-p`  | Path to the project directory     | No       | `--path ./src/MyProject` |

