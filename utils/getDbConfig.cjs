const dotenv = require('dotenv');
dotenv.config();
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];


module.exports = config;