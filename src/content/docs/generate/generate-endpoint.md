---
title: generate endpoint
---

The `generate endpoint` command adds endpoint components to an existing Apiand project.

## Usage

```
apiand generate endpoint <name> [options]
```

## Options

| Option          | Alias | Description                                                        | Required | Example             |
|-----------------|-------|--------------------------------------------------------------------|----------|---------------------|
| `--http-method` | `-m`  | HTTP method for endpoint endpoints (Get, Post, Put, Patch, Delete) | No       | `--http-method Get` |

## Examples

Generate a endpoint with HTTP methods:
```
apiand generate endpoint User --http-method GET
```

## Behaviours

- `DDD` with `FastEndpoints` and `MediatR`: Generates the fast endpoint class with the specified HTTP method in the Presentation layer, and a request and response model in the Application layer, and a request handler in the Application layer, following the CQRS pattern with MediatR. If the `--http-method` option is not specified, it defaults to `Get`, if it is a `Get` it is a `Query`, otherwise it is a `Command`.
