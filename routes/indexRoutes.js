const router = require('express').Router();
const path = require('path');
const fs = require('fs');


const { readFromFile, readAndAppend, uuid } = require('../helpers/indexHelper');

//Gets
router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, './public/index.html'))
    // res.json(`${req.method} request received`)

});
//No API is a page
router.get('/notes', (req, res) =>
    res.sendFile(path.join(_dirname, './public/notes.html'))
);

//API is data
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        // console.log(JSON.parse(data));
        res.json(JSON.parse(data));
    })
    // readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));

});


// POST Route
router.post('/api/notes', (req, res) => {
    // console.info(`${req.method} request received to add a tip`);
    // const { noteTitle, noteText, noteUUID } = req.body;

    const { noteTitle, noteText } = req.body;

    if (req.body) {
        const newNote = {
            noteTitle,
            noteText,
            // noteUUID: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
    } else {
        res.error('Error in adding note');
    }
});

router.post('/api/note', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
  
    // Destructuring assignment for the items in req.body
    const { email, feedbackType, feedback } = req.body;
  
    // If all the required properties are present
    if (email && feedbackType && feedback) {
      // Variable for the object we will save
      const newFeedback = {
        email,
        feedbackType,
        feedback,
        feedback_id: uuid(),
      };
  
      readAndAppend(newFeedback, './db/feedback.json');
  
      const response = {
        status: 'success',
        body: newFeedback,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting feedback');
    }
  });


module.exports = router;