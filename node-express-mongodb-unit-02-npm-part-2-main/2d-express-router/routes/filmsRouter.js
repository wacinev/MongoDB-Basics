/*
    6. Import express & uuid, set up router
*/

const express = require('express');
const router = express.Router();
const uuid = require('uuid').v4;

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

router.get('/', (req, res) => {
    let {sortOrder, sortBy} = req.query;
    if (sortOrder === undefined){
        sortOrder = 'asc';
    }

    if (sortBy === undefined){
        sortBy = 'name';
    }
    
    const sortedFilms = sortFilms(films, sortOrder, sortBy)
    console.log(req.query);
    res.status(200).json({message: 'success', payload: sortedFilms})
})

/*
    7. Create an array of your favorite films using uuid() for unique ID's
*/

/*
    12. Create sort method for the films
*/
function sortFilms (films, sortOrder, sortBy) {
    // sort the data according to sortBy (name or boxOffice)
    const sortedFilms = films.toSorted((film1, film2) => {
        return film1[sortBy] > film2[sortBy] ? 1 : -1;
    })
    // if sortOrder is 'desc', reverse it
    if (sortOrder === 'desc'){
        sortedFilms.reverse();
    }
    // return the sorted data
    return sortedFilms;
}
/*
    8a. Handle GET requests to /films
*/

/*
    9. Handle POST requests to /films
*/

// POST localhost:3000/api/v1/films
router.post('/', (req, res) => {
    const newFilm = {
        name: req.body.name,
        boxOffice: req.body.boxOffice,
        id: uuid(),
    }

    films.push(newFilm);
    res.status(200).json({message: 'Success', payload: newFilm})
})

/*
    10. Handle PATCH requests to /films/[id]
*/

/*
    11. Handle DELETE requests to /films/[id]
*/

/*
    8b. Export the router
*/
module.exports = router;