//import express
const express = require('express');

//initialize express app


const app=express();
const port=5000;



//import router
const UserRouter=require('./routers/userRouter');
const ProductRouter=require('./routers/productRouter');
app.use(express.json());

// middlewares 
app.use('/user', UserRouter);
app.use('/product', ProductRouter);




//creating routes
app.get('/', (req, res) =>
{
    res.send('response from express server')
} );

// /home
app.get('/home', (req, res) =>
{
    res.send('response from Home server')
} );

// / add
app.get('/app', (req, res) =>
{
    res.send('response from Add server')
} );


//starting server
app.listen(port, ()=>{ 
    console.log('express server started sucessfully')
});

