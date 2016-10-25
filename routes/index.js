var express = require('express');
var router = express.Router();
var http = require('http');
var oauth = require('oauth');

var twitter = require('../controllers/TwitterController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/my_tweet', twitter.getUserTimeline)

router.get('/home_timeline', twitter.getHomeTimeline)

module.exports = router;
