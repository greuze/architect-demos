module.exports = function setup(options, imports, register) {
    // load node modules required by this plugin
    var uuid = require('uuid');

    var app = imports.http;

    app.get('/db', function (req, res) {
        console.log('Handler db');
        try {
            uuid.parse('1234'); // Method only present in uuid@1.x
            res.send('DB got successfully!');
        } catch (e) {
            res.status(500).send('DB got with error!');
        }
    });

    register(null, {});
};