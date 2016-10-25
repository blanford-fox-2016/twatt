var OAuth = require('oauth');
var key_data = require('../helper/key_data')

var oauth = new OAuth.OAuth(
  key_data.request_token,
  key_data.access_token,
  key_data.consumer_key,
  key_data.application_secret,
  key_data.ver,
  key_data.null,
  key_data.algo
);

function get_data_cb(url, callBack){
  oauth.get(
  url,
  '326746118-1kgr2KZmfbB3YDcM6ygd17OiZVEXX5dm6wT5IoDw', //test user token
  '7pg7iCTk1b4DgcGmA0qdJ4R5m0ck9FShh7yc4pG0WjJcR', //test user secret
  function (e, data, res){
    if (e) console.error(e);
    callBack(data)
  });
}

module.exports = {
  getHome: function(req, res, next){
    var url = 'https://api.twitter.com/1.1/statuses/home_timeline.json'
    get_data_cb(url, function( data){
      res.json(JSON.parse(data))
    })
  },
  getTimeline: function(req, res, next){
    var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
    get_data_cb(url, function(data){
      res.json(JSON.parse(data))
    })
  },
  search: function(req, res, next){
    var data_search = req.query.q
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q='+data_search
    get_data_cb(url, function(data){
      res.json(JSON.parse(data))
    })

  }

}
