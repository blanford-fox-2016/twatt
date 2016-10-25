'use strict'

//=========================================
// Initiating the library
//=========================================

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller/controllers.js');
//=========================================
// Configure the apps
//=========================================
let app = express();
let router = express.Router();
let port = process.env.PORT || 3000;


// app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended : true}));
// app.use(bodyParser.json());

//================================================
// Setting up the routes
//================================================

// router.get('/timeline', controller.homeTimeline);
router.get('/search', controller.searchTweet)

//================================================
// Listening the app through the port
//================================================
app.use('/api', router);
app.listen(port, () => {
  console.log('listening on the port ', port);
});
