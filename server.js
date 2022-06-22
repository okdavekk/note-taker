const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const PORT = process.env.PORT || 3001;
const database = require('./db/db.json');
const uuid = require('./helpers/uuid.js');
// const { addAbortSignal } = require('stream');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Gets
app.get('/api/index', (req, res) =>
    res.sendFile(path.join(_dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) =>
    res.sendFile(path.join(_dirname, '/public/notes.html'))
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
    console.log(`Express server listening on port http://localhost:${PORT}!`)
);