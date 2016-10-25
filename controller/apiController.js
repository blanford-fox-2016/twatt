var connection = require('../helpers/oauth')

module.exports = {
  getSearch: function(req, res, next){
    var data_search = req.query.q
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q='+data_search
    connection.get_data_cb(url, function(data){
      res.json(JSON.parse(data))
    })
  }

}
