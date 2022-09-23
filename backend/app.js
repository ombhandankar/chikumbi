const express = require('express');
const path = require('path');
const body = require('body-parser');
const mongoose = require('mongoose');

const tableRoutes = require('./routes/table');

const app = express();
mongoose.connect('mongodb://localhost:27017/chikumbi')
    .then(() => {
        console.log('connection established');
    })
    .catch(() => {
        console.log('connection failed');
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, PUT, OPTIONS")
    next();
})

app.use("/api/tables", tableRoutes);

module.exports = app;