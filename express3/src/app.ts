import * as path from 'path';
import { MongoClient } from 'mongodb';
import * as architect from 'architect';

function getConfig(url: string, dbName: string, collectionName: string, configProperty: string, callback: (e: Error, c?: string) => void) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) return callback(err);

        var dbo = db.db(dbName);
        dbo.collection(collectionName).findOne({[configProperty]: {'$exists': true}}, function(err, result) {
            if (err) return callback(err);

            console.log('Loaded config from mongodb: ', result);
    
            db.close();

            return callback(null, result[configProperty]);
        });
    }); 
}

getConfig('mongodb://localhost:27017/', 'test', 'test', 'architect-config', (err, configContent) => {
    var configPath = path.join(__dirname, 'config.js');

    // If there was no error when loading config from mongodb, use that config instead of the file
    if (!err) {
        var Module = require('module');
        var m = new Module();
        m._compile('module.exports = ' + JSON.stringify(configContent), configPath); // Last argument could be any other string
        require.cache[Module._resolveFilename(configPath, this)] = m;

        // Another way to do it, loading an empty file first
//        var emptyConfig = require(configPath);
//        require.cache[Module._resolveFilename(configPath, this)].exports = configContent;
    };

    architect.loadConfig(configPath, (err, config) => {
        if (err) throw err;
        var myApp = architect.createApp(config, function (err, app) {
            if (err) throw err;
            console.log('App ready');
        });

        myApp.on('service', (name, service) => {
            console.log('Service registered %s', name);
        });

        myApp.on('plugin', (plugin) => {
            console.log('Plugin registered', plugin);
        });

        myApp.on('ready', (app) => {
            console.log('All plugins loaded');
        });
    });
});
