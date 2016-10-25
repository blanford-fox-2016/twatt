var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var util = require('util')
var OAuth = require('oauth')
var controller = require('../controller/controller')



// var Twitter = require('node-twitter');
//
// var twitterSearchClient = new Twitter.SearchClient(
//     'oFMgBiqa5dTB6Bv7IdjmuzIzB',
//     'Wwizb3n3eX5ty4bS2vtTeKXL3TnJwUTebYkc94dhtJoHXJX9v6',
//     '4107079093-gT8KhijAzAY3GuuwrHKpRXbKACvcj67PJx20GVN',
//     'yx5sUaqQWZkRyVXmWoCRX4Rcn6L36gJcKoPDV0tgUbN62'
// );
//
//
// /* GET home page. */




router.get('/', controller.search);
module.exports = router;
