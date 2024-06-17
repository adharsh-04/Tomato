const exp=require('express');
const userApp=exp.Router();
const expressAsyncHandler = require('express-async-handler');


//import jsonwebtoken
const jwt=require('jsonwebtoken');
//import bcryptjs
const bcryptjs=require('bcryptjs');

//get usersCollection from server.js to add the data
userApp.use((req,res,next)=>{
    usersCollection=req.app.get('usersCollection');
    adminCollection=req.app.get('adminCollection');
    next();
})
require('dotenv').config();

//request handler for userRegistration route
//expressAsyncHandler will handle the async errors without crashing the server
userApp.post('/user',expressAsyncHandler(async(req,res)=>{
    //Get the body 
    const newUser=req.body;
    //check for duplicate user with same username
    const dbUser=await usersCollection.findOne({username:newUser.username});
    //if their is a user with same username
    if(dbUser!=null){
        res.send({message:"user already existed"});
    }
    else{
        //hash the password
        const hashedPassword=await bcryptjs.hash(newUser.password,7);
        //change the password to hashed password
        newUser.password=hashedPassword;
        //Insert the data to usersCollection
        await usersCollection.insertOne(newUser);
        //send the response
        res.send({message:"user created"});
    }
}))


//request handler for user login route
userApp.post('/login',expressAsyncHandler(async(req,res)=>{
    //Get the user credentials
    const userCred=req.body;
    //compare or find user with the username
    const dbUser=await usersCollection.findOne({username:userCred.username});
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


module.exports=userApp;