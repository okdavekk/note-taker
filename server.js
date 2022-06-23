//Some code provided through class and reused from previouse modules in some places


// const path = require('path');
// const { addAbortSignal } = require('stream');
// const util = require('util');

const express = require('express');
const database = require('./db/db.json');
const uuid = require('./helpers/indexHelper.js');
const baseRoutes = require('./routes/indexRoutes');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/", baseRoutes);

//Listen
app.listen(PORT, () =>
    console.log(`Express server listening on port http://localhost:${PORT}`)
);