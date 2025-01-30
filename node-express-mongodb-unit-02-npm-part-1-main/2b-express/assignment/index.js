const express = require('express')
const app = express()

const trainlines = require('./trainlines.js') 


// app.get() is a called request handler for a GET request to /1
app.get('/', (req, res) => {
    console.log('something')
    res.status(200).json(trainlines)
})

app.get('/red', (req, res) => {
    res.status(200).json(trainlines.redLine);
})

app.get('/green', (req, res) => {
    res.status(200).json(trainlines.greenLine);
})

app.get('/1', (req, res) => {
    res.status(200).json(trainlines.redLine.filter(station => station.train.includes("1")));
})

app.get('/4', (req, res) => {
    res.status(200).json(trainlines.greenLine.filter(station => station.train.includes("4")));
})

app.get('/local', (req, res) => {
    const lines = Object.keys(trainlines);
    const localStations = [];
    lines.forEach((line) => {
        trainlines[line].forEach((trainlines) => {
            if (trainlines.train.includes("1") ||  trainlines.train.includes("6")) {
                localStations.push(trainlines);
            }
        })
    })
    res.status(200).json(localStations);
})

app.get('*', (req, res) => {
    res.status(404).json("The MTA is currently working to take all our money. Train will be delayed anyway so just be patient");
})

const PORT = 3000;

app.listen(PORT, () => console.log(`Server listening on: ${PORT}`))