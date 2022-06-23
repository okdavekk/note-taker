//Some code provided through class and reused from previouse modules in some places.  I also could not get it all working so I did not want to change things up / change names just yet to not have it ping for plagurizing.  Just incase it does, I apologize.

const router = require('express').Router();
const path = require('path');
const fs = require('fs');

//took out readFromFIle
const { readAndAppend, uuid } = require('../helpers/indexHelper');

//Gets
router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, './public/index.html'))

});
//No API is a page
router.get('/notes', (req, res) =>
    res.sendFile(path.join(_dirname, './public/notes.html'))
);

//API is data
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    })

});

//Varun provided stuff to mess around with
// router.post('/api/notes', (req, res) => {
//     const { title, text } = req.body;
//     if (title && text) {
//         const savedNote = {
//             title, 
//             text,
//             id: uuid(),
//         };
//         notes.push(savedNote);
//         let noteArray = JSON.stringify((notes), null, 2);
//         fs.writeFile('./db/db.json', noteArray, () => {
//             const response = {
//                 body: savedNote,
//             }
//             res.json(response);
//         })
//     };;
// });


// POST Route
router.post('/api/notes', (req, res) => {
    // const { noteTitle, noteText, noteUUID } = req.body;

    const { noteTitle, noteText } = req.body;

    if (req.body) {
        const newNote = {
            noteTitle,
            noteText,
            noteUUID: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
    } else {
        res.error('Error in adding note');
    }
});


module.exports = router;