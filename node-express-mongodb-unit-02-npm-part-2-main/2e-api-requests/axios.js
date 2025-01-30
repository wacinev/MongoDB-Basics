// a little server takes in a request to /[someQuery]
// hits up the themoviedb.org API (which has a VERY long endpoint)
// sends back to the client movies that match the query

const express = require('express');
const axios = require('axios');

const app = express();

app.get('/:query', async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=a4cae43902da506229d8148bcfc7364c&language=en-US&query=${req.params.query}`)

        res.status(200).json({
            message: "success",
            payload: response.data.results,
        })
    } catch (error){
        res.status(500).json({message: 'failure', payload: error})
    }
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`))