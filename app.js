
const mongoose=require('mongoose');
const express=require('express');
const app=express();




require('./conn')
const User=require('./userSchema');
const PORT=process.env.PORT;
app.use(express.json());






//Middleware   
const middleware=(req,res,next)=>{
    console.log("hello my middleware");
    next();
    }


app.get('/',(req,res)=>{
    res.send("hello")
});
app.get('/about',middleware,(req,res)=>{
    res.send("hello about")
});
app.get('/contact',(req,res)=>{
    res.send("hello contact")
});
app.get('/signin',(req,res)=>{
    res.send("hello signin")
});
app.get('/signup',(req,res)=>{
    res.send("hello signup")
});

app.listen(3000,()=>{
    console.log("server is running on 3000")
})
