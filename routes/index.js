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

// var stream = client.stream('statuses/filter', {track: 'javascript'});
// stream.on('data', function(event) {
//   console.log(event && event.text);
// });
//
// stream.on('error', function(error) {
//   throw error;
// });

client.get('statuses/user_timeline', function(req, res, next) {
  // if(error) throw error;
  // console.log(tweets);
  console.log(res);
  // console.log(response);  // Raw response object.
});

module.exports = router;
