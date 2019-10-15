//check env ->process.env.NODE_ENV from express web framework used to globaly access

var env = process.env.NODE_ENV || 'production';

//fetch config.json

var config = require('./config.json');
var envConfig = config[env];

// add envConfig[key] to process.env[key]

Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);



