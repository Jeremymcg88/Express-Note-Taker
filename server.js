// declaring that we're using express 
const express = require('express');

const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})