const express = require('express'),
    router = express.Router(),
    Todo = require('../models/Todos'),
    todoController = require('../controllers/todo')

router.get('/', (req, res) => {
    todoController.getTodos().then(todos => res.json(todos))
})

router.post('/', (req, res) => {
    const data = req.body;
    todoController.addTodo(data)
        .then(todo => res.json(todo))
})

router.put('/', (req, res) => {
    const data = req.body.data.payload
    todoController
        .updateTodo(data)
        .then(todo => res.json(todo))
})

router.delete('/', (req, res) => {
    const data = req.body
    new Promise((resolve, reject) => {
        resolve(data.forEach(unit => {
            todoController.deleteTodo(unit)
        }))
        res.send('Delete Completed')
    })
})

module.exports = router