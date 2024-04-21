require("dotenv").config();

const { countries } = require('../utils/countries.list');

const searchCountry = (country) => {
    const findCountries = countries.filter(item => {
        return item.name.toLowerCase().startsWith(country);
    });

    findCountries.forEach(findCountry => {
        findCountry.bordersCountriesName = [];

        if (findCountry.borders && findCountry.borders.length) {
            findCountry.borders.forEach(item => {
                countries.forEach(country => {
                    if (item === country.alpha3Code) findCountry.bordersCountriesName.push(country.name);
                });
            });
        }
    });

    return findCountries;
};

module.exports = { searchCountry };