/*
  6. Import Express and axios. Set up Router variable
*/

const express = require('express');
const axios = require('axios');

const router = express.Router();

/*
  7. Set up homepage, respond with no data yet.
*/

router.get('/', (req, res) => {
  res.render('home', {data: [], searchQuery: ' '})
})

/*
  9. Set up a response to using the search form
*/

router.get('/movies', async (req, res) => {
  const query = req.query.search;
  try {
    const response = await axios(`https://api.themoviedb.org/3/search/multi?api_key=a4cae43902da506229d8148bcfc7364c&language=en-US&query=${query}`)
    // if there are movies (.results has length)
    // render 'home' with the movies and the search
    // if no movies
    // render'home' with empty arrays
    if (!response.data.results.length) {
      res.render('home', {data: [], searchQuery: "No movies were found!"})
    } else {
      const movies = response.data.results.filter((result) => {
        return result.media_type === 'movie';
      })

      res.render('home', {data:movies, searchQuery: query})
    }
  } catch (error) {

  }
})

//when we get a requst for /movies
//make an API call with the search query
//save the results
//render home.ejs with the search query and the movies

/*
  8. Export the router
*/

module.exports = router;