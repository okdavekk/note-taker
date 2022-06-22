const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const PORT = 3001;
const database = require('./db/db.json');
const uuid = require('./helpers/uuid.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Gets
app.get('/', (req, res) =>
    res.sendFile(path.join(_dirname, '/public/assets/index.html'))
);

app.get('/', (req, res) =>
    res.sendFile(path.join(_dirname, '/public/assets/notes.html'))
);

//Post
app.post('/', (req, res) =>
    res.json(`${req.method} request received`)
);

app.post('/', (req, res) =>
    res.json(`${req.method} request received`)
);


//Listen
app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);