require('dotenv').config();
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors')

const ResponseCodes = require("../utils/response.code");

var corsOptions = {
    origin: '*'
}

const app = express();
app.use(express.static(path.join(__dirname, './public')))

let response_code = new ResponseCodes();
let server_status = response_code.serverError().status;

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use('/api/country', require('../routes/countries.routes'));

app.use((err, req, res, next) => {
    if (err) {
        response_code.message = 'Something went wrong - Please try again.';
        response_code.error = err;
        return res.status(server_status).send(response_code.serverError());
    }
    next();
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));