/*
    0a. In terminal, initialize the project:
    npm init -y
*/

/*
    0b. In terminal, install the express module using the following command:
    npm install express
*/

/*
    1. Import the express module, and prepare a ready-to-use variable for it
*/
const express = require('express');
const app = express();
/*
    4. Set up a response to localhost:3000/
*/

app.get('/',  (req, res) => {
    res.status(304).send('Home page!!')
})

/*
    5. Set up a response to localhost:3000/about
*/
app.get('/about', (req, res) => {
    res.status(200).send("About page!!");
})

app.get('/instructors', (req, res) => {
    const instructors = ['colin', 'jeron', 'dan']
    res.status(200).json(instructors);
})
/*
    6. Set up a response to localhost:3000/*
*/

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
})

/*
    2. Set the Port we want to use
*/
const PORT = 3000;
/*
    3. Set the application to begin listening / begin spinning the server
*/
app.listen(PORT, () => console.log(`Server is listening on: ${PORT}`))