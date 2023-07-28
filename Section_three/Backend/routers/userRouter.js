const express =require('express');
const router = express.Router();

router.get('/add',(req,res)=> {
    res.send('response from produc add');
});

//getall
router.get('/getall',(req,res)=> {
    res.send('response from product getall');
});

//getid
router.get('/getid',(req,res)=> {
    res.send('response from product getid');
});


module.exports=router;