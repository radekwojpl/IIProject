
const next = require("mongodb");
const ContactForm = require('../models/conctactForm');
const nodemailer = require('nodemailer');


exports.register = (req, res, next) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fajnyportal7@gmail.com',
            pass: 'dfr469S!'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'footballscoressup@gmail.com', // sender address
        to: req.body.email1, // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'test from nodemailer', // plain text body
        html:' We have received your message. We will contact you as soon as possible.' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err);
        else
            console.log(info);
    });


    if (req.body.name1 &&
        req.body.email1 &&
        req.body.message1) {

        let contactForm = {
            email: req.body.email1,
            username: req.body.name1,
            message: req.body.message1

        };

        ContactForm.create(contactForm, function (error, user) {
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

exports.delete = (req, res) => {
    ContactForm.findByIdAndRemove(req.params.id, function (err) {
        if(err) return next (err);
        else{
            res.redirect('/inbox');
        }
    })
};