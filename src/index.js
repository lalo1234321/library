const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const test = require('./routes/test');
const genero = require('./routes/genero');

require('dotenv').config();

app.set('port',process.env.PORT);


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(test);
app.use(genero);
// donde va a escuchar?

app.listen(app.get('port'), () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});

