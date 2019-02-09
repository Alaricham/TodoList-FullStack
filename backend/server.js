const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors');

require('dotenv').config()
const port = process.env.PORT

const todoRouter = require('./routes/todos');

app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todoRouter);

app.listen(port, () => {
    console.log(`App listening on ${port}...`)
});