var express = require('express');
var router = express.Router();
var http = require('http');
var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  '8w2MNT1lrkRpZNrHvCiMH4JVm',
  'xpeLrzyJhAhgiy7PIsRrOQakjZwXrk8rbLklXaovpBNhhtCf6y',
  '1.0A',
  null,
  'HMAC-SHA1'
);

oauth.get(
  'https://api.twitter.com/1.1/trends/place.json?id=23424977',
  'your user token for this app', //test user token
  'your user secret for this app', //test user secret
  function (e, data, res){
  if (e) console.error(e);
    console.log(require('util').inspect(data));
    done();
  });
