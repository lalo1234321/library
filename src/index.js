const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const test = require('./routes/test');


require('dotenv').config();

app.set('port',3002);


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(test);

// donde va a escuchar?

app.listen(app.get('port'), () => {
    console.log(`Escuchando puerto ${3002}`);
});

