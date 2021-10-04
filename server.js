const { notes } = require('./db/db.json')

//Packages being used
const fs = require('fs');

// npm uuid
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// declaring that we're using express
const express = require('express');

const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware (its looking at url encoded information and that its
// using objects example:json)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/notes', (req, res) => {
    let results = notes;

   res.json(results);
});

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})