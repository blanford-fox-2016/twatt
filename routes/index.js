'use strict'
let express = require('express');
let router = express.Router();
let http = require('http');
let oauth = require('oauth');

let twitter = require('../controllers/TwitterController.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
