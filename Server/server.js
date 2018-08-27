const express = require('express')
const bodyParser = require ('body-parser')
require ('dotenv').config()
const app = express()
const serverController = require('./serverController')
const profanity = require('profanity-middleware')
app.use(bodyParser.json())
profanity.setOptions({
    mask:'*',
    // blacklist:curses
})
let {
    SERVER_PORT
} = process.env
app.get('/info', serverController.getInfo)

app.delete('/deleteInfo/:id', serverController.deleteInfo)
//request level
app.post('/postInfo',profanity.init, serverController.postInfo)

app.use(profanity.init) //top level
app.put('/putInfo', serverController.putInfo)

app.listen(SERVER_PORT,()=>{
    console.log(`Server listening on ${SERVER_PORT}`)
})

// still missing:
// axios request
// match object
// ALL REDUX
// Express (static files)
// Set up Delete, Post, & Put requests
// Auth sessions
// Auth0
// DB statements (alter Table)
// DB Statements (create table)
// DB statements(insert)
// DB statements (join)
// DB Statements (select)
// DB Statements (sub-Queries)
// DB Massive (connection)
// DB Massive (SQL commands)
// DB Patterns (many-many)
// DB Patterns (one-many)
// DB Patterns (one-one)
// DB Patterns (datatypes)
