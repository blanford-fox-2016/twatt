var express = require('express');
var router = express.Router();
var controller = require('../controllers/twatt')
var auth = require('../config/config')
var OAuth = require('oauth')


/* GET home page. */
router.get('/oauth/search', controller.getSearchOauth);


router.get('/twit/search', controller.getSearchTwit)

module.exports = router;
