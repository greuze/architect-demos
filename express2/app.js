#!/usr/bin/env node

var path = require('path');
var architect = require('architect');

var configPath = path.join(__dirname, 'config.js');
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

