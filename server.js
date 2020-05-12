require('dotenv').config();

const   express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        block = require('./routes/block_route.js'),
        app = express(),
        HTTP_PORT = process.env.HTTP_PORT;

        //* Middleware
        app.use(bodyParser.json());
        app.use(
            bodyParser.urlencoded({
            extended: true
            })
        );
        app.use(cors()); 


        app.use('/api', block);
 
        app.listen(HTTP_PORT, () => console.log(`Listening at http://localhost:${HTTP_PORT}`))