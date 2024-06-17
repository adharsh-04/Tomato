const exp=require('express');
const app=exp();
require('dotenv').config();
let port=process.env.PORT||5000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))