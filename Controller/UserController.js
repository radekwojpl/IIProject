
const mongoose = require('mongoose');
const User = require('../models/user');



exports.register = (req, res, next) => {
        console.log("register");
};

    
exports.login = (req, res, next) => {
    if (req.body.login && req.body.password) {
        User.authenticate(req.body.login, req.body.password, function (error, user) {
            if (error || !user) {
                let err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userID = user._id;
                console.log("poprawnie zalogowano");
                return res.redirect('/');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
    };

