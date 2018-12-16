var express = require('express');
var router = express.Router();

const PagesController = require('../Controller/PagesController');



/* GET home page. */
router.get('/',
PagesController.index);

router.get('/signin',
PagesController.signin);

router.get('/news',PagesController.loadnews);

module.exports = router;
