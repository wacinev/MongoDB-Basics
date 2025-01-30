/*
    9. Import `express` and `axios`
*/
const axios = require('axios');
const express = require('express');

const app = express();
/*
    11. Write an asynchronous function to respond to requests at `localhost:3000/:query`
*/

app.get('/:query', async(req, res) => {
    try {
        const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/:query=${req.params.query}?format=json`)
        console.log(response.data)
        res.status(200).json({message: "success", payload: response.data})
    } catch (error) {
        res.status(500).json({message: 'failure', payload: error})
    }
})

/*
    10. Set up the server's ability to listen to requests
*/
const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))