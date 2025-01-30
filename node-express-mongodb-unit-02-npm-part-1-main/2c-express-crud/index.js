/*
    1. Import express & Morgan, set up app variable
*/

const express = require('express');
const logger = require('morgan');

const app = express();


/*
    2. Set up middleware to read requests better
*/
app.use(logger('dev'))
app.use(express.json());
/*
    3. Set up local data to work with
*/

const pokeData = [
    {
      id: 1,
      name: "pikachu",
      type: "electric",
      pokedex: 25,
    },
    {
      id: 2,
      name: "bulbasaur",
      type: "grass",
      pokedex: 1,
    },
  ];

/*
    4. Handle get requests to localhost:3000/pokemons
*/

app.get('/pokemons', (req, res) => {
    if (req.query.name === undefined) {
        res.status(200).json({message: "success", payload: pokeData});

        return;
    } 

    // let foundPokemon = undefined;
    // for (const pokemon of pokeData) {
    //     if (pokemon.name ===  req.query.name) {
    //         foundPokemon = pokemon;
    //     }
    // }

    const foundPokemon = pokeData.find((pokemon) => pokemon.name === req.query.name);
    if (foundPokemon) {
        res.status(200).json({message: "success", payload: foundPokemon});
    } else {
        res.status(404).json({
            message: "failure", 
            payload: "No pokemon found by that name.",
        });
    }
})

// if (express.response.message === 'success') {
//     response.payload;  
// } else {
//     response.payload;
// }
/*
    5. Set up the ability to query for a specific item in the data set
  */
// 5a. Set up for if the client requested a pokemon with a query

// 5b. Use .find to search for the pokemon in the data

// 5c. If the pokemon isn't found it will be undefined, send back a failure message

// 5d. if the pokemon IS found, send back a success message, with the pokemon that was found

// 4a. respond with the entire pokeData object if you DON'T input pokemon

/*
    6. Handle post requests to localhost:3000/pokemons
*/

app.post('/pokemons', (req,res) => {
    const isAlreadyCreated = pokeData.find((pokemon) => pokemon.name === req.body.name)
    if (isAlreadyCreated) {
        res.status(500).json({message: 'failure', payload: `${req.body.name} already exists`});

        return;
    }
    pokeData.push(req.body);
    res.status(201).json({message: 'success', payload: pokeData})
})

// const response = fetch.post('pokemon.api/pokemons')
// if (response.message === 'success'){
//     displayPokemon(response.payload)
// } else {
//     displayError(response.payload)
// }

/*
    7. Handle patch requests to localhost:3000/pokemons/:name
*/
// PATCH can send a lot less data
// PUT sends the entire object

app.patch('/pokemons/:name', (req,res) => {
    const incomingData = req.body;
    const originalPokemon = pokeData.find((pokemon) => pokemon.name === req.params.name);
    // for(const key of Object.keys(incomingData)) {
    //     originalPokemon[key] = incomingData[key];
    // }
    if (originalPokemon === undefined) {
        res.status(404).json({message: "failure", payload: `no pokemon by the name ${req.params.name}.`})

        return;
    }

    Object.assign(originalPokemon, incomingData);

    res.status(200).json({message: 'success', payload: originalPokemon});
})

/*
    8. Handle delete requests to localhost:3000/pokemons/:name
*/

app.delete('/pokemons/:name', (req, res) => {
    console.log(req.params);
    const i = pokeData.findIndex((pokemon) => pokemon.name === req.params.name)
    if (i === -1) {
        res.status(404).json({message: 'failure', payload: 'no pokemon by that name to delete'})

        return;
    }
    const deletedPokemon = pokeData.splice(i, 1)[0];
    res.status(200).json({message:'success', payload: deletedPokemon});
})

/*
    9. Handle any unhandled URL extensions as an error
*/

/*
    4b. Set up PORT and begin listening to requests
*/

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));