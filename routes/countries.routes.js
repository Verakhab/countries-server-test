const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countries.controller');

router.route('/countries').get(countriesController.getCountries);


module.exports = router;