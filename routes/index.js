var express = require('express');
var router = express.Router();

const PagesController = require('../Controller/PagesController');
const UserController =  require('../Controller/UserController');



/* GET home page. */
router.get('/', PagesController.index);
router.get('/signin', PagesController.signin);
router.get('/news', PagesController.loadnews);

router.post('/registerUser', UserController.register);
router.post('/loginUser', UserController.login);

module.exports = router;
