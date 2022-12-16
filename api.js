const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();


        // MIDDLEWARES CONFIG
        // CORS
        app.use(cors({
            origin: '*',
            methods: ['GET']
        }));

        // STATIC FILES
        app.use(express.static(path.join(__dirname, 'public')));

        // JSON
        app.use(
            express.urlencoded({
                extended: true
            })
        );
        app.use(express.json());

        // WATCH FOR ROUTES
        // ROUTES HERE ----


// ROUTES
app.get('/', cors(), (req, res) => {
    res.json({
      'path': 'Home',
      'by Valerio': 'Hello, world! This is my own public API made using Nodejs & Express ^^',
      'message': 'Be Welcome!',
    })
})


app.listen(8080, () => {
    console.log('Server running...')
})