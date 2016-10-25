var express = require('express');
var router = express.Router();
var controler = require('../controller/controler')
/* GET home page. */
router.get('/', controler.awal);
//
router.get('/search',controler.getSearch);


module.exports = router;
