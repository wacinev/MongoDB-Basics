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
  res.render('homeCopy', {data: [], searchQuery: ' '})
})

/*
  9. Set up a response to using the search form
*/

router.get('/number/:num', async (req, res) => {
  const query = req.params.num;
  try {
    const response = await axios(`http://numbersapi.com/${query}?json`)
    console.log(response)

    res.render('homeCopy', {data: [response.data.text], searchQuery: query});
    
  } catch (error) {
    console.log(error)
  }
})

/*
  8. Export the router
*/
module.exports = router