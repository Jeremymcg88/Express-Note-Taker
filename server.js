const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoute = require('./Routes/apiRoutes/index');
const htmlRoute = require('./Routes/htmlRoutes/index');

// These set up the base code for the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// This displays the back-end information
app.use("/api", apiRoute);
// This displays the front-end information
app.use("/", htmlRoute);

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});