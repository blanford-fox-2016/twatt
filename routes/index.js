var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')

router.get('/oauth/home', controller.getHome)

router.get('/oauth/timeline', controller.getTimeline)

router.get('/oauth/search', controller.search)

module.exports = router;
