'use strict'
let express = require('express');
let router = express.Router();
let http = require('http');
let oauth = require('oauth');

let ui = require('../controllers/UIController.js')

/* GET home page. */
router.get('/', ui.home);

router.get('/search', ui.searchTweet);

module.exports = router;
