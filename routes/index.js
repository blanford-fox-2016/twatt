var express = require('express');
var router = express.Router();
var controller = require('../controller/viewController')

router.get('/', controller.viewSearch)

module.exports = router;
