---
title: generate entity
---

The `generate entity` command adds entity components to an existing Apiand project.

## Usage

```bash
apiand generate entity <name> [options]
```

## Options

| Option         | Alias | Description                     | Required | Example                                                           |
|----------------|-------|---------------------------------|----------|-------------------------------------------------------------------|
| `--attributes` | `-a`  | Entity attributes specification | No       | `--attributes "name:string,age:int,status:enum[active,inactive]"` |

:::note
Syntax for the attributes supports most C# basic types: string, int, long, decimal, double, bool, datetime, guid and enum 
:::

## Examples

Generate an entity with attributes:

```bash
apiand generate entity Product --attributes "name:string,price:decimal,category:string"
```

## Behaviours

- `DDD`: Generates an entity class in the Domain layer with the specified attributes, if there are enums it creates a separate file for them.

- `Standalone`: Generates an entity class and any enum classes in the `Entity/path` folder (where 'path' is derived from the entity name). For example, if the entity name is `Product.Category`, files will be created in `Entity/Product` folder.

- `SingleLayer`: Same as Standalone - generates entity and enum files in the `Entity/path` folder based on the entity name structure.
