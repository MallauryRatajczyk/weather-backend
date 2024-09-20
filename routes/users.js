var express = require('express');
var router = express.Router();
require('../models/connection');
const fetch = require('node-fetch');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');


router.post('/signup', (req, res) => {
    let obj = { name: req.body.name, email: req.body.email, password: req.body.password }
    if (checkBody(obj, ["name", "email", "password"])) {
        User.findOne({ email: req.body.email }).then(data => {
            if (!data) {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                newUser.save().then(data => { res.json({ result: true }) });
            }
            else {
                res.json({ result: false, error: 'user already exists' })
            }
        })
    } else {
        res.json({ result: false, error: 'Missing or empty fields' })

    }
})

router.post('/signin', (req, res) => {
    let obj = { email: req.body.email, password: req.body.password }
    if (checkBody(obj, ["email", "password"])) {
        User.findOne({ email: req.body.email, password: req.body.password }).then(data => {
            if (data) {
                res.json({ result: true });
            }
            else {
                res.json({ result: false, error: 'user not found' })
            }
        })
    } else {
        res.json({ result: false, error: 'Missing or empty fields' })
    }
})

module.exports = router;