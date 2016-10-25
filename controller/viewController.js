var connection = require('../helpers/oauth')

module.exports = {
  viewSearch: function(req, res, next){
    var data_search = req.query.q
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q='+data_search
    if(typeof data_search != "undefined"){
      connection.get_data_cb(url, function(data){
        console.log(data);
        res.render('index', {title: 'Search Twitter', show_data_search: JSON.parse(data)})
      })
    }else{
      res.render('index', {title: 'Search Twitter'})
    }
  }

}
