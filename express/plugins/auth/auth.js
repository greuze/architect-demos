module.exports = function setup(options, imports, register) {

    var app = imports.http;

    app.get('/auth', function (req, res) {
        res.send('Authenticated successfully!');
    });

    register(null, {});
};
