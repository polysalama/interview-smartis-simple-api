'use strict'

const express = require('express');
const routes = require('./routes/helicopterRoutes')
const bodyParser = require('body-parser')
const app = express()
require('./config/mongoose')()

const port = 8080

app.use('/', async (req, res, next) => {
    bodyParser.json()(req, res, err => {
        if (err) {
            res.status(400).send({ message: 'Bad JSON format.' })
        }
        next();
    })
});

app.use('/helicopters', routes);
app.use(function(req, res) {
    res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});
app.use(function(err, req, res, next) {
    res.status(500).send({ message: err.toString() });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
