---
title: new single-layer
---

The `new single-layer` command creates a streamlined, single-layer application that integrates FastEndpoints with Dapper for PostgreSQL database access. This template offers a lightweight alternative to the other architectures when you need a simpler, more direct approach.

## Options

| Option     | Alias | Description          | Required | Example                        |
|------------|-------|----------------------|----------|--------------------------------|
| `--name`   | `-n`  | Project name         | Yes      | `--name MySimpleApi`           |
| `--output` | `-o`  | The output directory | No       | `--output ./projects/simple`   |

> Omitting the `--output` option will create the project in the current directory.

## Usage

```bash
apiand new single-layer --name MySimpleApi
```

## Features

- **Single Project Structure**: Simplified architecture with all components in a single project
- **FastEndpoints**: Pre-configured API endpoints using the FastEndpoints framework
- **Dapper**: Lightweight ORM for efficient data access
- **PostgreSQL**: Ready-to-use database integration
- **Minimal Configuration**: Faster setup with sensible defaults

## When to Use

The single-layer architecture is ideal for:
- Small to medium-sized applications
- Rapid prototyping
- Microservices with focused functionality
- Projects where development speed is prioritized over complex domain modeling