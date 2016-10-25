var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var util = require('util')
var OAuth = require('oauth')

var twitter = {
  'consumer_key' : 'oFMgBiqa5dTB6Bv7IdjmuzIzB',
  'consumer_secret' : 'Wwizb3n3eX5ty4bS2vtTeKXL3TnJwUTebYkc94dhtJoHXJX9v6',
  'access_token_key' : '4107079093-gT8KhijAzAY3GuuwrHKpRXbKACvcj67PJx20GVN',
  'access_token_secret' : 'yx5sUaqQWZkRyVXmWoCRX4Rcn6L36gJcKoPDV0tgUbN62'
}

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  twitter.consumer_key,
  twitter.consumer_secret,
  '1.0A',
  null,
  'HMAC-SHA1'
)


function search (url, callback){
  oauth.get(
    url,
    twitter.access_token_key,
    twitter.access_token_secret,
    function (e, data, res){
        if(e) console.log(e);
          callback(data)
    })
}
module.exports = {
  search: function(req, res, next) {
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.query.q;
    search(url, function(data){
      res.json(JSON.parse(data))
    })
  }


}
