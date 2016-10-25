var OAuth = require('oauth')
var Twit = require('twit')
var auth = require('../config/config')

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  auth.twitterAuth.consumerKey,
  auth.twitterAuth.consumerSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var test = function (url, cb) {
  oauth.get(
    url,
    auth.twitterAuth.accessToken, // test user token
    auth.twitterAuth.accessTokenSecret, // test user secret
    function (e, data, res) {
      if (e)
        console.error(e);
      cb(data)
    });

}

module.exports = {
  getSearchOauth: function (req, res) {
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.query.q
    test(url, function (data) {
      res.json(JSON.parse(data))
    })
  },

  getSearchTwit: function (req, res) {
    var T = new Twit({
      consumer_key: auth.twitterAuth.consumerKey,
      consumer_secret: auth.twitterAuth.consumerSecret,
      access_token: auth.twitterAuth.accessToken,
      access_token_secret: auth.twitterAuth.accessTokenSecret,
    })

    T.get('search/tweets', { q: req.query.q, count: 100 }, function (err, data, response) {
      // console.log(data)
      // res.json(data.statuses[0].text)
      res.json(data)
    })
  }
}
