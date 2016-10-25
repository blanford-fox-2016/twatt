var express = require('express');
var router = express.Router();
var controller_twatt = require('../controller/controller_twatt')

/* cara liblary Twitter */
// var Twitter = require('twitter');
// var util = require('util');

// var client = new Twitter({
//   consumer_key: '8w2MNT1lrkRpZNrHvCiMH4JVm',
//   consumer_secret: 'xpeLrzyJhAhgiy7PIsRrOQakjZwXrk8rbLklXaovpBNhhtCf6y',
//   access_token_key: '790753648531734528-g1Ab134lshyHb3AiyWpzDyuGSlEsIuh',
//   access_token_secret: '1ZQfadCF58sZqcx2XsaTEI04GOatSMp5otZVfm4oN3uK0'
// });
//
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
//
// var count = 0;

// client.stream('filter', {track: 'toni'}, function(stream){
//   stream.on('toni', function(data){
//     // console.log(util.inspect(data));
//     res.json(data.text)
//     stream.destroy();
//     process.exit(0);
//   });
// });

// router.get('/alexander', function(req, res, next){
//   client.stream('filter', {track: 'toni'}, function(stream){
//     stream.on('toni', function(data){
//       // console.log(util.inspect(data));
//       res.send(data.text)
//       stream.destroy();
//       process.exit(0);
//     });
//   });
// })

/* cara liblary Twitter */

/* GET home page. */
router.get('/', controller_twatt.search);

module.exports = router;
