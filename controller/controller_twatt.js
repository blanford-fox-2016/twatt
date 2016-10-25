var express = require('express');
var OAuth = require('oauth');
var cofTweet = require('../config/configTweet');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  cofTweet.consumer_key,
  cofTweet.consumer_secret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

function search(url, callback){
  oauth.get(
    url,
    cofTweet.access_token_key, //test user token
    cofTweet.access_token_secret, //test user secret
    function (e, data, res){
    if (e) console.error(e);
      callback(data)
    });
}

module.exports = {

  search: function(req, res) {
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.query.q;
    search(url, function(data){
      res.json(JSON.parse(data))
    })
  }

}
