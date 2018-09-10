# Index Documentation

The Index component is the root entry point for any Avian application. This is especially handy for single page web applications.

## Synopsis

Avian supports a few methods for launching your application and its components.

### Development

    avian --home /path/to/app --mode development

### Production

    avian --home /path/to/app --mode production --name iniquity-website --port 80

## Component Files

Avian applications strictly follow a component driven design pattern. As such, Avian components can be comprised of any combination of the below mentioned supporting files depending on your needs and the kind of component you are creating.

### index.component.ts

Principle TypeScript or JavaScript logic associated with your component. This is typically where Vue, React, Ember and the like logic is placed.

### index.style.less

Where component specific style customizations should be places.

### index.config.json

A useful configuration file that Avian exposes as a Rest service. Additionally, you can leverage serverside rendering from objects stored in this file. In fact, it is very useful as a simple data store for less complex websites that don't require databases.
