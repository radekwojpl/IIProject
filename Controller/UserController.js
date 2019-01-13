
const mongoose = require('mongoose');
const User = require('../models/user');



exports.register = (req, res, next) => {
    // confirm that user typed same password twice
    if (req.body.password !== req.body.passwordConf) {
        let err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords don't match");
        return next(err);
    }

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        let userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,

        };

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
            
                return res.redirect('/');
            }
        });

    }
     else {
        let err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
};

    
exports.login = (req, res, next) => {
    if (req.body.login && req.body.password) {
        User.authenticate(req.body.login, req.body.password, function (error, user) {
            if (error || !user) {
                let err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
             
                console.log("poprawnie zalogowano");
                return res.redirect('/news');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
    };

