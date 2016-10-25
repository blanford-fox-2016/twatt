'use strict'
var express = require('express');
var router = express.Router();
var controller = require('../controller/controler')

//searching
router.get('/auth',controller.getUser)

module.exports = router;


// Consumer Key (API Key)	uOxMpuYSDtKMEQv4Zf3xjVYj7
// Consumer Secret (API Secret)	R2Ak10g03PqV8UweLwaQUIuglCZEkNT5s7hwE2SWaz58buZvhA
// Access Token	109550271-UeIFdvbRcjyzCx01dd2Iu1gLwdigu0BxsQ7fTvpV
// Access Token Secret	K1dE3d1WJfdeJDBiMYd3zRgY0H5DP8FivnaEbc6MJzNV0
