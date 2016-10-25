var express = require('express');
var router = express.Router();
var api = require('../controller/api');
/* GET users listing. */
router.get('/api/status',api.getStatusApi);
router.get('/api/search',api.getuserApi);


module.exports = router;
