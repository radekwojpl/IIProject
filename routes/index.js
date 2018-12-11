var express = require('express');
var router = express.Router();

const PagesController = require('../Controller/PagesController');

/* GET home page. */
router.get('/', PagesController.index );

module.exports = router;
