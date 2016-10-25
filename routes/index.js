'use strict'
var express = require('express');
var router = express.Router();
var config = require('../config/config')
var OAuth = require('oauth');


////
// var express = require('express');
// module.exports = {
//   consumerkey:'uOxMpuYSDtKMEQv4Zf3xjVYj7',
//   token:'109550271-UeIFdvbRcjyzCx01dd2Iu1gLwdigu0BxsQ7fTvpV',
//   secrettoken:'K1dE3d1WJfdeJDBiMYd3zRgY0H5DP8FivnaEbc6MJzNV0',
//   consumersecret:'R2Ak10g03PqV8UweLwaQUIuglCZEkNT5s7hwE2SWaz58buZvhA'
// }


// Consumer Key (API Key)	uOxMpuYSDtKMEQv4Zf3xjVYj7
// Consumer Secret (API Secret)	R2Ak10g03PqV8UweLwaQUIuglCZEkNT5s7hwE2SWaz58buZvhA
// Access Token	109550271-UeIFdvbRcjyzCx01dd2Iu1gLwdigu0BxsQ7fTvpV
// Access Token Secret	K1dE3d1WJfdeJDBiMYd3zRgY0H5DP8FivnaEbc6MJzNV0



var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
      config.consumerkey,
      config.consumersecret,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
/* GET home page. */
//sample url
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


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
//searching
router.get('/',function(req, res, next){
  let url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.query.q
  out(url,(data)=>{
    res.json(JSON.parse(data))
  })
})

module.exports = router;


// Consumer Key (API Key)	uOxMpuYSDtKMEQv4Zf3xjVYj7
// Consumer Secret (API Secret)	R2Ak10g03PqV8UweLwaQUIuglCZEkNT5s7hwE2SWaz58buZvhA
// Access Token	109550271-UeIFdvbRcjyzCx01dd2Iu1gLwdigu0BxsQ7fTvpV
// Access Token Secret	K1dE3d1WJfdeJDBiMYd3zRgY0H5DP8FivnaEbc6MJzNV0
