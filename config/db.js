const config = require('../knexfile.js');
const knex = require('knex');

const env = config.development;

module.exports = knex(env);