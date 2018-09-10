% Index Component Documentation

# Introduction

Avian's Index component is the main entry point to your application. Every application requires its existence, and should be seen as the initial building block of any simple to large scale application. For single page applications, this is typically the only component your application will require. Avian generally supports your component files being written in the language of your choosing, with only a few known exceptions.

# Component Files

Avian applications follow a component driven design pattern. The components themselves are modular in such a way where a developer can pick and choose which component files to leverage.can be comprised of any combination of the below mentioned supporting files depending on your needs and the kind of component you are creating.

## index.view.(pug/ejs/html)

The view file is responsible for the presentation of your component. It is what is displayed to a client web browser or mobile device. Depending on the view engine of your choosing, server-side rendering as well as the index.config.json data is available to the view natively.

## index.component.(ts/js)

Principle TypeScript or JavaScript logic associated with your component. This is typically where Vue, React, Ember and the like logic is placed.

## index.style.(less/css/sass/stylus)

Each component is capable of managing its own style requirements. Avian currently supports less, sass, stylus and of course css with no special configuration needs.

## index.config.json

A useful configuration file that Avian exposes as a Rest service and even binds data to your view engine taking advantage of server-side rendering capabilities. Additionally, it is very useful as a simple data store for less complex websites that don't require databases.

## index.service.(ts/js)

With a component service file you can easily extend your component to provide server side express routes beyond the scope of what Avian provides out of the box. This is far superior to the concept of client side routing, because with component service files you can execute server-side code, making them truly powerful.

## index.doc.md

This file that you're reading here.

