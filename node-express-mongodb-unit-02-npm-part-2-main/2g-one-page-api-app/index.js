/*
    1. Import Express, Morgan, Path, and set up app variable
*/

const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

/*
    2. Set up middleware
*/

// Our usual middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set folder for serving static files
app.use(express.static(path.join(__dirname, 'public')));
//set the rendering engine (view engine)
app.set('view engine', 'ejs');
//set the location of the views folder
app.set('views', path.join(__dirname, 'views'));

/*
    4. Import Router files
*/

const indexRouter = require('./routes/indexRouter');

/*
    5. Set up the URL routes to connect to the router
*/

// any request to '/' (or beyond) go to indexRouter
app.use('/', indexRouter);

/*
    3. Set up the port and begin listening
*/
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));