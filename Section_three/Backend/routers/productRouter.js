const express =require('express');
const router = express.Router();

router.get('/add',(req,res)=> {
    res.send('response from user add');
});

//getall
router.get('/getall',(req,res)=> {
    res.send('response from user getall');
});

//getid
router.get('/getid',(req,res)=> {
    res.send('response from user getid');
});


module.exports=router;