module.exports = function setup(options, imports, register) {
    var app = imports.http;

    app.get('/fail', function (req, res) {
        console.log('Handler fail');
        res.send('Fail successfully!');
    });

    if (Math.random() > 0.5) {
        register(null, {});
    } else {
        register(new Error('Random error'));
    }
};
