'use strict'
const config = require('./config.js');
const OAuth = require('oauth');


module.exports = {
  access : (link, callback) => {
    let oauth = new OAuth.OAuth(
      config.request_token,
      config.access_token,
      config.customer_key,
      config.customer_secret,
      config.version,
      null,
      config.keyed_hashed
    );
    oauth.get(
      link,
      config.user_token,
      config.user_secret,
      ((err, data, res) => {
        if (err) console.error(err);
        callback(data);
      })
    )
  }
}
