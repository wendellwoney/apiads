const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const morgan = require('morgan');

const helmet = require('helmet');

const app = express();

const routes = require('./routes');

const ads = [
    {
        title: 'Hello, world (again)!',
    }
];

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

app.use(helmet());

app.use(bodyParser.json());

app.use(morgan('combined'));

app.use(routes);

app.listen(3000, () => {
    console.log('Listem on port 3000!');
});