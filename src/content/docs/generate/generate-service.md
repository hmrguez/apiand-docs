---
title: generate service
---

The `generate service` command adds service components to an existing Apiand project.

## Usage

```bash
apiand generate service <name> [options]
```

## Examples

Generate a service:
```bash
apiand generate service UserService
```

## Behaviours

- `DDD`: Generates a service interface in the Application layer and a service implementation in the Infrastructure layer; DI is done automagically with the `Service` attribute.