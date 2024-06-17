const exp=require('express');
const adminApp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
//get authorsCollection from server.js
adminApp.use((req,res,next)=>{
    adminCollection=req.app.get('adminCollection');
    
    next();
})
//import bcrypts
const bcryptjs=require('bcryptjs');
//import jsonwebtoken
const jwt=require('jsonwebtoken');

//request handler for author Registration
adminApp.post('/admin',expressAsyncHandler(async(req,res)=>{
    const newUser=req.body;
   
    //comparing it with username
    const dbUser=await adminCollection.findOne({username:newUser.username});
    if(dbUser!=null){
     res.send({message:"Admin already registered"});
    }
    else{
     //hash the password
     const hashedPassword=await bcryptjs.hash(newUser.password,6);
     newUser.password=hashedPassword;
     //add it to the collection
     await adminCollection.insertOne(newUser);
     res.send({message:"admin registered"});
 
    }
 }))
require('dotenv').config();
//request handler for author Login
adminApp.post('/login',expressAsyncHandler(async(req,res)=>{
    //Get the user credentials
    const userCred=req.body;
    //compare or find user with the username
    const dbUser=await adminCollection.findOne({username:userCred.username});
   
    //if dbuser is null
    if(dbUser===null){
        res.send({message:"user does not exist"})
    }
    else{
        //compare the hashed password
        const status=await bcryptjs.compare(userCred.password,dbUser.password);
        if(status===false){
            res.send({message:"Incorrect password"});
        }
        else{
            //create json web token
            const signedToken=jwt.sign({username:dbUser.username},process.env.SECRET_KEY,{expiresIn:'1d'});
            //send the response
            res.send({message:"login success",token:signedToken,user:dbUser});

        }
    }
}))



module.exports=adminApp;