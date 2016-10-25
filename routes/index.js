var express = require('express');
var router = express.Router();
var controller = require('../controllers/twatt')

/* GET home page. */
router.get('/', controller.getLogin);

module.exports = router;
