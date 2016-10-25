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

module.exports = {
 out:(url,callback) => {
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
}
