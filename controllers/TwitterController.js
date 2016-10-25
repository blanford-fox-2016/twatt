module.exports = {
  getUserTimeline: (req, res, next) => {
    // describe('OAuth1.0',function(){
      var OAuth = require('oauth');

      // it('tests trends Twitter API v1.1',function(done){
        var oauth = new OAuth.OAuth(
          'https://api.twitter.com/oauth/request_token',
          'https://api.twitter.com/oauth/access_token',
          'ISq8Od5yOfweTpEtDb41R8Psw',
          '5Qi0myIvZmHM6btryYUV8mTBkeR91h8cjS2r6nSHK9BWkVoZGx',
          '1.0A',
          null,
          'HMAC-SHA1'
        );
        oauth.get(
          'https://api.twitter.com/1.1/statuses/user_timeline.json',
          '571701947-jkOsFbDvnHykoXKmDDqxpvx1k1raPUt09PB41pme', //test user token
          'ObmIp8jbk9owbdMcxazLBoYLgoQhglUU98e7Fqj0RuOx2', //test user secret
          function (e, data, res){
            if (e) console.error(e);
            // console.log(require('util').inspect(data));
            var tweets = eval(data);
            console.log(`Here are ${tweets.length} latest tweet from ${tweets[0].user.screen_name}`);
            for (var i = 0; i < tweets.length; i++) {
              console.log(`Tweet by ${tweets[i].user.screen_name} : `);
              console.log(tweets[i].text);
              console.log(`- at ${tweets[i].created_at}`);
              console.log('-------------------------------------------');
            }

            // res.send(inidata[]);
            // done();
          });
      // });
    // });
  },
  getHomeTimeline: (req, res, next) => {
    // describe('OAuth1.0',function(){
      var OAuth = require('oauth');

      var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'ISq8Od5yOfweTpEtDb41R8Psw',
        '5Qi0myIvZmHM6btryYUV8mTBkeR91h8cjS2r6nSHK9BWkVoZGx',
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        '571701947-jkOsFbDvnHykoXKmDDqxpvx1k1raPUt09PB41pme', //test user token
        'ObmIp8jbk9owbdMcxazLBoYLgoQhglUU98e7Fqj0RuOx2', //test user secret
        function (e, data, res){
          if (e) console.error(e);
          // console.log(require('util').inspect(data));
          var tweets = eval(data);
          console.log(`Here are ${tweets.length} latest tweet from ${tweets[0].user.screen_name} home timeline`);
          for (var i = 0; i < tweets.length; i++) {
            console.log(`Tweet by ${tweets[i].user.screen_name} : `);
            console.log(tweets[i].text);
            console.log(`- at ${tweets[i].created_at}`);
            console.log('-------------------------------------------');
          }
          // res.json(tweets);

          // done();
        });
      // });
    // });
  }
}
