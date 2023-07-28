const express = require('express');
const router = express.Router();
const Model = require('../models/userModel')

router.post('/add', (req, res) => {
    console.log(req.body);

    //saving the data to mongodb
    new Model(req.body).save()
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            res.status(500).json(err);

        });


});

//getall
router.get('/getall', (req, res) => {
    res.send('response from product getall');
});

//getid
router.get('/getid', (req, res) => {
    res.send('response from product getid');
});


module.exports = router;