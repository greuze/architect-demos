module.exports = function setup(options, imports, register) {

    var app = imports.http;

    app.get('/db', function (req, res) {
        res.send('DB got successfully!');
    });

    register(null, {});
};