# twatt

## Install express

```
npm install express-generator -g
express --ejs
npm install
```

## Intall Twit or OAuth

```
npm install twit --save
```

OR

```
npm install oauth --save
```

## Twit Usage

```javascript
var Twit = require('twit')

var T = new Twit ({
  consumer_key:         CONSUMER_KEY,
  consumer_secret:      CONSUMER_SECRET,
  access_token:         ACCESS_TOKEN,
  access_token_secret:  ACCESS_TOKEN_SECRET
})

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, res) {
  res.json(data)
})
```

## OAuth Usage

```javascript
var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'your application consumer key',
      'your application secret',
      '1.0A',
      null,
      'HMAC-SHA1'
    );

oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      'your user token for this app', //test user token
      'your user secret for this app', //test user secret
      function (e, data, res){
        if (e) console.error(e);
        console.log(require('util').inspect(data));
        done();
      });
  });
 ```

## Create config for Twitter OAuth

```javascript
module.exports = {
        'twitterAuth' : {
        'consumerKey'       : CONSUMER_KEY,
        'consumerSecret'    : CONSUMER_SECRET,
        'accessToken'       : ACCESS_TOKEN,
        'accessTokenSecret' : ACCESS_TOKEN_SECRET
    }
}
```

## API for Search

```
http://localhost:3000/oauth/search?q=KEYWORD
http://localhost:3000/twit/search?q=KEYWORD
```
