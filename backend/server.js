const exp=require('express');
const app=exp();
require('dotenv').config();
let port=process.env.PORT||5000
//importing userapi and admin api into server.js
const userApp=require('./APIs/userApi')
const adminApp=require('./APIs/adminApi');
app.use(exp.json());
//if path starts with /userapi
app.use('/userapi',userApp);
//if path starts with adminapi
app.use('/adminapi',adminApp);
//importing mongoclient
const mongoclient=require('mongodb').MongoClient;
//Making connection to the database
mongoclient.connect(process.env.MONGO_URL)
.then(client=>{
    //get database obj
    const Tomato=client.db('Tomato');
    //get collection from database
    const usersCollection=Tomato.collection("usersCollection");
    const adminCollection=Tomato.collection("adminCollection")
    //share collection object with express application
    app.set('usersCollection',usersCollection);
    app.set('adminCollection',adminCollection)
    //confirm db connection status
    console.log("DB connection successful")
})
.catch(err=>console.log("err in db connection",err));
//to handle errors
app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})

app.listen(port,()=>console.log(`Server is running on port ${port}`))