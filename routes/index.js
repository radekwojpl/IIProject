var express = require('express');
var router = express.Router();

const PagesController = require('../Controller/PagesController');



/* GET home page. */
router.get('/', 
PagesController.loadnews,
PagesController.index );

router.get('/signin', 
PagesController.loadnews,
PagesController.signin);

module.exports = router;
