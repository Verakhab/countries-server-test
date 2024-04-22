const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countries.controller');

// router.route('/country').get(countriesController.getCountry);
router.route('/countries').get(countriesController.getCountries);


module.exports = router;