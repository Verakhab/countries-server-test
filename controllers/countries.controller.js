const ResponseCodes = require("../utils/response.code");
const { countries } = require('../utils/countries.list')

let response_code = new ResponseCodes();
let server_status = response_code.serverError().status;
let success_status = response_code.success().status;

const getCountries = async (req, res) => {
    try {
        response_code.message = 'Countries list fetched sucessfully!';
        response_code.data = countries;
        return res.status(success_status).send(response_code.success());
    } catch (error) {
        response_code.message = 'Something went wrong - Please try again.';
        response_code.error = error;
        return res.status(server_status).send(response_code.serverError());
    }
};

module.exports = {
    getCountries,
};
