// Required packages
const fs = require('fs');
const { v4 } =require('uuid');
const router = require('express').Router();

const abc = require('../../Develop/db/db.json')

// GET method to display notes stored in db
router.get("/notes", (req, res) => {
<<<<<<< HEAD
    fs.readFile("../../Develop/db/db.json", "utf8", function (err, data) {
=======
    fs.readFile("./db/db.json", "utf8", function (err, data) {
>>>>>>> 318c22e30d382f52b9a30ec4aeda1fd644ffb89f
        let noteData = [];
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
        if (data.length > 0) {
            noteData = JSON.parse(data);
            res.json(noteData);
        } else {
            console.log("No notes saved");
        }
    });
});
// POST method to store a new note in db
router.post("/notes", (req, res) => {
    let newNote = req.body;

    console.log(newNote)

<<<<<<< HEAD
    fs.readFile("../../Develop/db/db.json", "utf8", (err, data) => {
=======
    fs.readFile("./db/db.json", "utf8", (err, data) => {
>>>>>>> 318c22e30d382f52b9a30ec4aeda1fd644ffb89f
        if (err) {
            console.log(`err at the database ${err}`);
        } else {
            if (data.length > 0) {
                obj = JSON.parse(data);
            } else {
                obj = [];
            }
            
            newNote.id = v4().substring(0, 4);
            obj.push(newNote);
            
<<<<<<< HEAD
            fs.writeFile("../../Develop/db/db.json", JSON.stringify(obj), "utf8", (err) => {
=======
            fs.writeFile("./db/db.json", JSON.stringify(obj), "utf8", (err) => {
>>>>>>> 318c22e30d382f52b9a30ec4aeda1fd644ffb89f
                if (err) {
                    throw err;
                }
                console.log("Note saved.");
                
<<<<<<< HEAD
                fs.readFile("../../Develop/db/db.json", "utf8", function (err, data) {
=======
                fs.readFile("./db/db.json", "utf8", function (err, data) {
>>>>>>> 318c22e30d382f52b9a30ec4aeda1fd644ffb89f
                    let noteData = [];
                    if (err) {
                        throw err;
                    }
                    if (data.length > 0) {
                        noteData = JSON.parse(data);
                        res.json(noteData);
                    } else {
                        console.log("No notes saved");
                    }
                });
                
            });
        }
    });
});
// DELETE method to delete notes stored in db
<<<<<<< HEAD
// router.delete("/notes/:id", (req, res) => {
//     fs.readFile("../../Develop/db/db.json", "utf8", (err, data) => {
//         if (err) {
//             throw err;
//         }
//         let objNew = JSON.parse(data);
=======
router.delete("/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        let objNew = JSON.parse(data);
>>>>>>> 318c22e30d382f52b9a30ec4aeda1fd644ffb89f

//         const deleteThis = objNew.findIndex((note) => note.id === req.params.id);
//         objNew.splice(deleteThis, 1);

<<<<<<< HEAD
//         const output = fs.writeFile("../../Develop/db/db.json", JSON.stringify(objNew), (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log("Note rewritten");
//         });
//         res.send(output);
//     });
// });
=======
        const output = fs.writeFile("./db/db.json", JSON.stringify(objNew), (err) => {
            if (err) {
                throw err;
            }
            console.log("Note rewritten");
        });
        res.send(output);
    });
});
>>>>>>> 318c22e30d382f52b9a30ec4aeda1fd644ffb89f

module.exports = router;
