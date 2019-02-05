module.exports = function startup(options, imports, register) {
    // load node modules required by this plugin
    var express = require('express');
    var app = express();

    app.use((req, res, next) => {
        console.log('Requested %s', req.url);
        next();
    });

    // Process options and default values
    var port = options.port;

    var server = app.listen(port, function (err) {
        if (err) return register(err);
        console.log('HTTP server listening on port %d', port);
        register(null, {
            http: app
        });
    });
};
