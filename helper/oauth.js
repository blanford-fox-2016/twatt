var OAuth = require('oauth');
var key_data = require('../helpers/config')

var oauth = new OAuth.OAuth(
  key_data.request_token,
  key_data.access_token,
  key_data.consumer_key,
  key_data.application_secret,
  key_data.ver,
  key_data.null,
  key_data.algo
);

module.exports = {
  get_data_cb: function(url, callBack){
    oauth.get(
    url,
    key_data.user_token,
    key_data.user_secret,
    function (e, data, res){
      if (e) console.error(e);
      callBack(data)
    });
  }
}
