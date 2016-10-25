var express = require('express');
var router = express.Router();
var controller = require('../controllers/api')
var auth = require('../config/config')
var OAuth = require('oauth')


/* GET API. */

router.get('/search', controller.getSearchAPI);


module.exports = router;
