/*
    1. Import express & Morgan, set up app variable
*/
const express = require('express');
const logger = require('morgan');
const uuid = require('uuid').v4;

const app = express();
/*
    2. Set up middleware
*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/*
    3. Import Router files
*/
const emojisRouter = require('./routes/emojisRouter');
const filmsRouter = require('./routes/filmsRouter');

/*
    4. Set up the URL routes to connect to each router
*/
// localhost:3000/api/v1/emojis
app.use("/api/v1/emojis", emojisRouter);
app.use('/api/v1/films', filmsRouter);
/*
    5. Set up the port and begin listening
*/

const films = [
    {
        id: uuid(),
        name: "Guardians of the Galaxy",
        boxOffice: 300,
    },
    {
        id: uuid(),
        name: "Dr. Strange & the Multiverse of Madness",
        boxOffice: 75,
    },
    {
        id: uuid(),
        name: "Thor",
        boxOffice: 55,
    },
    {
        id: uuid(),
        name: "When You Finish Saving The World",
        boxOffice: 2,
    },
];

app.get('api/v1/films', (req, res) => {
    res.status(200).json({message: 'success', payload: films})
})

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))