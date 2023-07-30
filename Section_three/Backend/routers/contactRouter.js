const express = require('express');
const router = express.Router();
const Model=require('../models/contactModel')

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
    res.send('response from user getall');
});

//getid
router.get('/getid', (req, res) => {
    res.send('response from user getid');
});


//colon denotes url parameter
router.get('/getid/:id', (req, res) => {
    console.log(req.params.id);
    // res.send('response from product getid');
    Model.findById(req.params.id)

    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getbyfirstName/:firstName', (req,res)=>
{
    Model.find({firstName: req.params.firstName})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;