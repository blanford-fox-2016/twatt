var express = require('express');
var config = require('../config/config')
var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
      config.consumerkey,
      config.consumersecret,
      '1.0A',
      null,
      'HMAC-SHA1'
    )

let out = (url,callback) => {
  oauth.get(
        url,
        config.token, //test user token
        config.secrettoken, //test user secret
        function (e, data, res){
          if (e) console.error(e);
          callback(data);
          // done();
        })
      }

module.exports = {
  getUser:function(req, res, next){
    let url = 'https://api.twitter.com/1.1/statuses/user_timeline.json?q'+req.query.q
    out(url,(data)=>{
      res.json(JSON.parse(data))
    })
  }
}
