var express = require('express');
var router = express.Router();

const PagesController = require('../Controller/PagesController');
const UserController =  require('../Controller/UserController');
const ContactController = require('../Controller/ContactController');



/* GET home page. */
router.get('/', PagesController.index);
router.get('/signin', PagesController.signin);
router.get('/news', PagesController.loadnews);
router.get('/contact', PagesController.contact);

router.post('/registerUser', UserController.register);
router.post('/loginUser', UserController.login);

router.post('/contactForm', ContactController.register);


module.exports = router;
