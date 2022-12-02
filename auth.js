const express=require('express')
const router=express.Router();


require('./db/conn');
const User=require("./userSchema");


router.get('/',(req,res) =>{
    res.send("hello from server router")
});

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.json({message:req.body});
    //res.send('mera registration page')
});

//const {name,email,phone,work,pasword,cpassword} =req.body

    //if(!name || !email || !phone || !work || !pasword || !cpassword){
//return res.status(422).json({error:"please enter all fields"});
    //}
    //User.findOne({email:email})
    //.then((userExist)=>{
       // if(userExist){
          //  return res.status(422).json({error:"email alredy exist"});
       // }


       // const user=new User({name,email,phone,work,pasword,cpassword});


        //user.save().then(()=>{
//res.status(201).json({message:"user registration sucessfull"})
        //}).catch((e)=>res.status(500).json({error:"failed to register"}))
    ///}).catch(err=>{console.log(e);});
//});
module.exports=router;   
