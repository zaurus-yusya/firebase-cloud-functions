const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.get('/', (req, res) =>{
    const data = {
        "hello" : "world"
    }
    res.status(201).send(data);
});

app.get('/:num', (req, res) => {
    const data = [
        {"key" : 1, "value" : "one"},
        {"key" : 2, "value" : "two"},
        {"key" : 3, "value" : "three"},
        {"key" : 4, "value" : "four"},
        {"key" : 5, "value" : "five"},
    ];
    const response_value = data.find(data => data.key === Number(req.params.num));
    
    if(response_value){
        res.status(201).send(response_value);
    }else{
        res.status(204).send();
    } 
});

app.post('/', (req, res) =>{
    const data = req.body;
    res.status(201).send(data);
});

exports.test = functions.region('asia-northeast1').https.onRequest(app);
