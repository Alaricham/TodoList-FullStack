const knexConfig = require('../knexfile'),
    knex = require('knex')(knexConfig),
    bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;