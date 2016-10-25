var express = require('express');
var router = express.Router();
var controller = require('../controller/apiController')

router.get('/search', controller.getSearch)

module.exports = router;
