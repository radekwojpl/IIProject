
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('fa3b1266a35f4f86b18c65163f8cb8d2');
const request = require('request');


exports.index = (req, res) => {
    request.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-01&sortBy=publishedAt&apiKey=fa3b1266a35f4f86b18c65163f8cb8d2",function(error, response, body){
        var news = JSON.parse(body);
        console.log(news);
    res.render('index',{news:news});
})};

exports.signin = (req, res) => {
    res.render('registration' );
};

exports.loadnews = (req, res) => {
    request.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-01&sortBy=publishedAt&apiKey=fa3b1266a35f4f86b18c65163f8cb8d2",function(error, response, body){
        var news = JSON.parse(body);
        console.log(news);
        res.render('news',{news:news})

    })};


