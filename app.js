const express = require('express');
const app = express();

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
    req.body = "librarian"
    next()
}, (req, res, next) => {
    const checkPermission = (val) => {
        return val
    }
    if (checkPermission(req.body) === "librarian") {
        res.send({
            route: "/libraries",
            permission: true
        })
    }
    else{
        res.send({
            route: "/libraries",
            permission: false
        })
    }
})

app.get('/authors', (req, res, next) => {
    req.body = "author"
    next()
}, (req, res, next) => {
    const checkPermission = (val) => {
        return val
    }
    if (checkPermission(req.body) === "author") {
        res.send({
            route: "/authors",
            permission: true
        })
    }
    else{
        res.send({
            route: "/authors",
            permission: false
        })
    }
})

module.exports = app;