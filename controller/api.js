var express = require('express');
var config = require('../config/config')
var connection = require('../config/helper')

module.exports = {
  //timeline api
  getStatusApi:function(req, res, next){
    let url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
    connection.out(url,(data)=>{
      res.json(JSON.parse(data))
    })
  },
//search api
  getuserApi:function(req, res, next){
    let url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.query.input
    connection.out(url,(data)=>{
      res.json(JSON.parse(data))
    })
  }
}
