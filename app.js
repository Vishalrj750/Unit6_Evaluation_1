const express = require('express');
const app = express();
const cors = require('cors');

app.use((req, res, next) => {
    console.log(req.path)
    next()
})




app.get('/books', (req, res, next) => {
    res.send({
        route: "/books"
    })
})

app.get('/libraries', (req, res, next) => {
    res.send({
        route: "/libraries",
        permission: true
    })
})

app.get('/authors', (req, res, next) => {
    res.send({
        route: "/authors",
        permission: true
    })
})

module.exports = app;