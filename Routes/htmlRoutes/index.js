const path = require('path');

const router = require('express').Router();

// npm satThese create routes for when API is called
// This displays main page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});
// This displays note taking page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});
// This allows the route to be executed if there are typos
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;