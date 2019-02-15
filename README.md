# architect-demos
Some functionality demos of node.js architect module. These mini-demo projects have been inspired in [architect demos](https://github.com/c9/architect/tree/master/demos).

* [calculator2](/calculator2). Modified [calculator](https://github.com/c9/architect/tree/master/demos/calculator), but using `architect` as normal dependency, and moved the two pseudo-dependencies `architect-http*` dependencies to local plugins.
* [express](/express). Simple express HTTP server (as plugin), with two other plugins that implement routes.
* [express2](/express2). Modified [express](/express), with two plugins simulating external dependencies and two other local plugins. Async config load. Architect event handlers.
* [express3](/express3). Modified [express2](/express2), to add typescript and allow to read config from mongoDB.
