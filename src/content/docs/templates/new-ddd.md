---
title: new ddd
---


The `new ddd` is a specialized command that inherits from the `new` command base class. It creates new projects
following the Domain-Driven Design (DDD) architectural pattern building 4 projects: Presentation, Domain, Application
and Infrastructure.

## Options

| Option          | Alias  | Description                      | Required | Example                    |
|-----------------|--------|----------------------------------|----------|----------------------------|
| `--name`        | `-n`   | Project name                     | Yes      | `--name MyDddProject`      |
| `--output`      | `-o`   | The output directory             | No       | `--output ./projects/ddd`  |
| `--api-type`    | `-api` | API type (FastEndpoints)         | No       | `--api-type FastEndpoints` |
| `--db-type`     | `-db`  | Database type (MongoDB, EFCore)  | No       | `--db-type MongoDB`        |
| `--application` | `-app` | Application layer type (MediatR) | No       | `--application MediatR`    |
| `--domain`      | `-dom` | Domain layer type (Default)      | No       | `--domain Default`         |

> Omitting the `--output` option will create the project in the current directory.

> Omitting any other non required option will use the default value.

## Usage

```bash
apiand new ddd --name MyProject --api-type FastEndpoints --db-type MongoDB
```