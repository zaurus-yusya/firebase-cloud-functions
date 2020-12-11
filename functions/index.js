const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.get('/', (req, res) =>{
    const data = {
        "name" : "zaurus"
    }
    res.status(201).send(data);
});

app.post('/', (req, res) =>{
    const data = req.body;
    res.status(201).send(data);
});

exports.test = functions.region('asia-northeast1').https.onRequest(app);
