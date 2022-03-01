// Filename: COMP229002-W2022-Midterm-301167069
// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// WebApp Name: Favorite Movie List

var express = require('express');
var router = express.Router();
let controllerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controllerIndex.home);

module.exports = router;
