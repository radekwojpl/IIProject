
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('93413add24ba47f6a11bfca4817bbc11');


exports.index = (req, res) => {
    res.render('index' );
};

exports.signin = (req, res) => {
    res.render('registration' );
};

exports.loadnews = (req,res,next) => {
    var news = newsapi.v2.topHeadlines({
        category: 'polityka',
        language: 'pl',
        country: 'pl'
        
      }).then(response => {

      });

    next();
};