
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('93413add24ba47f6a11bfca4817bbc11');
const request = require('request');


exports.index = (req, res) => {
    request.get("https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-16&sortBy=publishedAt&apiKey=93413add24ba47f6a11bfca4817bbc11",function(error, response, body){
        var news = JSON.parse(body);
        console.log(news);
    res.render('index',{news:news});
})};

exports.signin = (req, res) => {
    res.render('registration' );
};

exports.loadnews = (req, res) => {
    request.get("https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-16&sortBy=publishedAt&apiKey=93413add24ba47f6a11bfca4817bbc11",function(error, response, body){
        var news = JSON.parse(body);
        console.log(news);
        res.render('news',{news:news})

    })};