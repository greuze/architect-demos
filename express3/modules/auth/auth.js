module.exports = function setup(options, imports, register) {
    // load node modules required by this plugin
    var uuid = require('uuid');

    var app = imports.http;

    app.get('/auth', function (req, res) {
        console.log('Handler auth');
        try {
            uuid.parse('1234'); // Method only present in uuid@1.x
            res.send('Authenticated successfully!');
        } catch (e) {
            res.status(500).send('DB got with error!');
        }
    });

    register(null, {});
};
