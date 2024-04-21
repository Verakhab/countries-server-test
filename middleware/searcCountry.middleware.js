require("dotenv").config();

const { countries } = require('../utils/countries.list');

const searchCountry = (country) => {
    const findCountries = countries.filter(item => {
        return item.name.toLowerCase().startsWith(country);
    });

    return findCountries;
};

module.exports = { searchCountry };