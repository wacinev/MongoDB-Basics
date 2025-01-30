const express = require('express');
const logger = require('morgan');

const app = express();

// Middleware
// Adds logging in your terminal for requests and responses
app.use(logger('dev'));
// Adds parsing of incoming JSON in the request body.
app.use(express.json());
// Adds parsing of query parameters
app.use(express.urlencoded({extended: false}));

const sandwichBuild = require('./sandwichBuild')

app.get('/sandwiches', (req, res) => {
    res.status(200).json(sandwichBuild);
})

app.get('/sandwiches/:option', (req, res) => {
    const ingredients = sandwichBuild[req.params.option]
    if (ingredients) {
        res.status(200).json({message: "success", payload: ingredients});
    } else {
        res.status(404).json({message: "failure", 
            payload: 'Hey, sorry Sandwich King does not provide that ingredient!'});
        }
        
    })

app.post('/sandwiches/:option', (req, res) => {
    const isAlreadyAvail = req.params.option
    if (isAlreadyAvail === undefined) {
        res.status(404).json({message: 'failure', payload: `${isAlreadyAvail} is not a category in our ingredients!`})

        return;
    }

    if (req.body.key === undefined){
        res.status(400).json({message: "failure", payload: "Request body must include a message"})

        return;
    }

    sandwichBuild[isAlreadyAvail].push(req.body.key);
    res.status(200).json({message: 'success', payload: sandwichBuild[isAlreadyAvail]})

})

app.put('/sandwiches/:option', (req, res) => {
    const incomingData = req.body;

    sandwichBuild[req.params.option] = incomingData;


    res.status(200).json({message: 'success', payload: sandwichBuild[req.params.option]});
})

app.delete('/sandwiches/:option/:value', (req, res) => {
    const opt = sandwichBuild[req.params.option]; // cheese = ["cheddar","swiss", "provolone"...]
    const val = req.params.value; //cheddar
    // const {opt, val} = req.params  would be the same as the above two
    const removal =  opt.indexOf(val);
    const spl = opt.splice(removal, 1)
 
    res.status(200).json({message:'success', payload: spl && sandwichBuild});

} )

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

