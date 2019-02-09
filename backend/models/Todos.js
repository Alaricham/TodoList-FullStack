const bookshelf = require('./bookshelf');

const Todos = bookshelf.Model.extend({
    tableName: 'todos'
});

module.exports = Todos;