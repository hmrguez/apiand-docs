---
sidebar_label: new
sidebar_position: 1
---

# new

The `new` command is the base class for all architecture-specific commands in the Apiand CLI. It provides the foundation for creating new projects from templates based on different architectural patterns.

## Overview

The `new` command handles the core functionality for:
- Validating project configuration
- Fetching appropriate templates
- Generating project structure
- Creating solution files
- Adding projects to the solution
- Setting up project references

## Available Architecture Commands

The following architecture-specific commands are registered from the `new` command:

- [`new ddd`](./new-ddd.md) - Creates a new project following Domain-Driven Design architecture

## Usage

Architecture-specific commands are accessed through the main `new` command:

```bash
apiand new [architecture] [options]
```

## Remarks

You can check the documentation for each command for their options when building a new project.


