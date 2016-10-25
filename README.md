# twatt by tamatamvan
A simple example for REST API with OAuth implementation using **Node.JS 6, Express, OAuth and Twitter API **


## Technology
Here are some technologies that used and required to run this program. Make sure you've installed all of them on your machine.
* [Node.JS 6](https://nodejs.org/)
* [Express (NodeJS Framework)](http://expressjs.com/)
* [OAuth (npm packages)](https://www.npmjs.com/package/oauth)
* [Twitter API](https://dev.twitter.com/)

## Files and directory structure

If you need to edit the routes you can access  `routes/twatt.js` file, and if you need to edit the logic and data operations you can access `controller/TwitterController.js`, and helpers `helpers/oauthTwitter.js`

You can insert your Twitter API customer keys and token in `config/config.js` file.
```
.
├── README.md
├── access
├── app.js
├── bin
│   └── www
├── config
│   └── config.js
├── controllers
│   └── TwitterController.js
├── helpers
│   └── oauthTwitter.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── index.js
│   ├── twatt.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    ├── layout.jade
    └── user.jade
```


## package.json file and dependencies list

```
{
  "name": "twatt",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "morgan": "~1.7.0",
    "oauth": "^0.9.14",
    "serve-favicon": "~2.3.0"
  }
}
```

## Running twatt on your machine
Here are some steps you've to follow for running this twatt API on your machine :
* `cd your_program_directory`
* `npm install` (Install all dependencies of this program)
* make sure you have insert your Twitter API customer key and token to `config/config.js`
* `npm start` (Run the node.js server on port 3000)

## API References

List off all routes :

|  Route | HTTP | Description |
|--------|------|-------------|
|http://localhost:3000/twatt/home_timeline | GET | Get recent tweets from your home timeline|
|http://localhost:3000/twatt/my_timeline | GET | Get recent tweets from your timeline|
|http://localhost:3000/twatt/search/tweet/:your_keyword | GET | Search tweets with a spesific keyword|


## Contact
#### Developer/Projects
* Homepage: [TamaTamvan's Note](https://tamatamvan.web.id)
* e-mail: tama@tamatamvan.web.id
* Twitter: [@tamaadhi1](https://twitter.com/tamaadhi1 "tamaadhi1 on twitter")
* Facebook: [Septian Adhi Tama](https://facebook.com/light.akira21 "Septian Adhi Tama on Facebook")

## Contributor

[![TamaTamvan](https://tamatamvan.web.id/wp-content/uploads/2016/04/bner-e1463908127607.png)](https://tamatamvan.web.id)

Septian Adhi Tama &copy; 2016
