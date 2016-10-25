'use strict'
let AuthTwitter = require('../helpers/oauthTwitter.js');
module.exports = {
  home: (req, res, next) => {
    res.render('index', { title: 'TWATT! - Search tweets' });
  },

  searchTweet: (req, res, next) => {
    let link = `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}`;
    let keyword = req.query.q;
    AuthTwitter.getData(link, (data) => {
      data = JSON.parse(data).statuses;
      res.render('search', { data ,  keyword, title: `TWATT! - Search results for ${keyword}`});
    });
  }
}
