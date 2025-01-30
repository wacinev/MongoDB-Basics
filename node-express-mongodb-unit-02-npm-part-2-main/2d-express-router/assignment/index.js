const express = require('express');
const logger =  require('morgan');


const app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const actorsRouter = require('./routes/actorsRouter')
const musiciansRouter = require('./routes/musiciansRouter')

app.use('/api/v1/actors', actorsRouter);
app.use('/api/v1/musicians', musiciansRouter);



const PORT = 3000;
app.listen(PORT, () => `Listening on Port: ${PORT}`);