var express = require('express');
var router = express.Router();
var twitter = require('twitter');
var client = new twitter({
  consumer_key: 'ZwThK8wJSEmfgFw5iRv9Q6zcv',
  consumer_secret: 'e4IBoB44Qk51lDeaUEETHG3ROBRUGYplAujm5uiLEJHEs9Pa6W',
  access_token_key: '169525544-HryYnTh4S0zVCbjLXqsv4zYIlD6exvUdfvyzuL2f',
  access_token_secret: 'FMRQiyFSJSwmfdOINbnaXkEgNROebwdNwe1epLGYw7Rud'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
