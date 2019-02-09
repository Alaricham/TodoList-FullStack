const Todo = require('../models/Todos');

module.exports = {
    getTodos: () => {
        return new Promise((resolve, reject) => {
            Todo.fetchAll().then(todos => {
                resolve(todos.models.map(todo => todo.attributes))
            });
        })
    },

    addTodo: (data) => {
        return new Promise((resolve, reject) => {
            new Todo(
                    data
                ).save()
                .then(todo => {
                    resolve(todo.attributes)
                });
        });
    },

    deleteTodo: (idInfo) => {
        return new Promise((resolve, reject) => {
            new Todo(
                    idInfo
                )
                .destroy()
                .then(todo => {
                    resolve(todo.attributes);
                });
        });
    },

    updateTodo: (todoInfo) => {
        console.log(todoInfo)
        return new Promise((resolve, reject) => {
            new Todo(
                    todoInfo.id
                ).save(todoInfo, {
                    patch: true
                })
                .then(todo => {
                    resolve(todo.attributes);
                });
        });
    }
}