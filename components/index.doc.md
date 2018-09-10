# Index Component Documentation

This document describes how Avian's index component is structured.

## Synopsis

Since the index component is the default component for any Avian application simply starting Avian
will launch the index component.

### Development

    avian --home /path/to/app --mode development

### Production

    avian --home /path/to/app --mode production --name iniquity-website --port 80

## Component Files

Avian applications follow the component design methodology.

### index.component.ts

Principle TypeScript or JavaScript logic associated with your component. This is typically where Vue, React, Ember and the like logic is placed.

### index.style.less

Where component specific style customizations should be places.

### index.config.json

A useful configuration file that Avian exposes as a Rest service. Additionally, you can leverage serverside rendering from objects stored in this file. In fact, it is very useful as a simple data store for less complex websites that don't require databases.
